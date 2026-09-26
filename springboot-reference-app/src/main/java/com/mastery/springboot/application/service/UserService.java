package com.mastery.springboot.application.service;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;
import com.mastery.springboot.application.usecase.CreateUserUseCase;
import com.mastery.springboot.domain.event.UserCreatedEvent;
import com.mastery.springboot.domain.exception.DomainValidationException;
import com.mastery.springboot.domain.model.Email;
import com.mastery.springboot.domain.model.User;
import com.mastery.springboot.domain.port.UserRepositoryPort;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class UserService implements CreateUserUseCase {

    private final UserRepositoryPort userRepositoryPort;
    private final ApplicationEventPublisher eventPublisher;

    public UserService(UserRepositoryPort userRepositoryPort, ApplicationEventPublisher eventPublisher) {
        this.userRepositoryPort = userRepositoryPort;
        this.eventPublisher = eventPublisher;
    }

    @Override
    @Transactional
    public UserDto execute(CreateUserCommand command) {
        Email email = new Email(command.email());

        if (userRepositoryPort.existsByEmail(email)) {
            throw new DomainValidationException("Bu e-posta adresi zaten kayıtlı: " + command.email());
        }

        User newUser = new User(null, command.fullName(), email, true, Instant.now());
        User savedUser = userRepositoryPort.save(newUser);

        // Domain Event fırlatılır (Gevşek bağlı mimari)
        eventPublisher.publishEvent(new UserCreatedEvent(savedUser.getId(), savedUser.getEmail().value()));

        return new UserDto(savedUser.getId(), savedUser.getFullName(), savedUser.getEmail().value(), savedUser.isActive());
    }
}

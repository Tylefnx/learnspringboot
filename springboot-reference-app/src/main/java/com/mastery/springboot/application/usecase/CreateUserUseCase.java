package com.mastery.springboot.application.usecase;

import com.mastery.springboot.application.dto.CreateUserCommand;
import com.mastery.springboot.application.dto.UserDto;

/**
 * Inbound Port: CreateUserUseCase
 */
public interface CreateUserUseCase {
    UserDto execute(CreateUserCommand command);
}

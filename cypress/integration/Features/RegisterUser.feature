Feature: Register User
	In order to use the system
	As a new user of the system
	I want to be register user to log in to the system

@register
Scenario: Register User
	Given I am in the home page of the system
	When I register new user with valid email address
	Then I should be redirected to my Account Page after successful user registration
	And I should be able to login with the new user credentials
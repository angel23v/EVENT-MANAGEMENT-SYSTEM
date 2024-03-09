# frozen_string_literal: false

# class UserMAiler
class UserMailer < ApplicationMailer
  default from: 'angelvazquezvirgen@gmail.com'
  def confirm_email(user)
    @user = user
    mail to: user.email, subject: 'Confirma tu correo electronico'
  end

  def reminder_email(user)
    @user = user
    mail to: user.email, subject: '¡Te recordamos que tienes un evento para mañana!'
  end
end

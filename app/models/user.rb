# frozen_string_literal: false

# class User
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :events

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  def self.send_reminder_emails
    events = Event.where(fecha: Date.tomorrow)
    events.each do |event|
      UserMailer.reminder_email(event.user).deliver
    end
  end
end

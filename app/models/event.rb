# frozen_string_literal: false

#class Event
class Event < ApplicationRecord
  belongs_to :user

  has_one_attached :foto

  scope :user_event, ->(user) { where(user_id: user.id) }
end

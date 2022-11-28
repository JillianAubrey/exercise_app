class Walkthrough < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  scope :created_since, ->(time) {where("created_at > ?", time)}
end

class Critique < ActiveRecord::Base
  validates :critic, :body, :telling, presence: true

  belongs_to(
    :critic,
    class_name: "User",
    foreign_key: :critic_id,
    primary_key: :id
  )

  belongs_to :telling
end

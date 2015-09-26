class Telling < ActiveRecord::Base
  validates :user, :story, :body, presence: true

  belongs_to :story
  has_one :user, through: :story, source: :user
  has_many :critiques
  has_many :critics, through: :critiques, source: :critic
end

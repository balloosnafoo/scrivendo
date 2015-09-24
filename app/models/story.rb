class Story < ActiveRecord::Base
  validates :title, :description, :user, presence: true

  has_many :tellings

  belongs_to :user
end

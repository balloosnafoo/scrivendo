class Telling < ActiveRecord::Base
  validates :user, :story, :body, presence: true

  belongs_to :story
end

class Session < ActiveRecord::Base
  validates :session_token, :user, presence: true
  after_initialize :ensure_session_token

  belongs_to :user

  private
  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end
end

class Api::TellingsController < ApplicationController
  def create
    @telling = current_user.tellings.new(telling_params)
    @telling.user_id = current_user.id
    if @telling.save
      render json: @telling
    else
      render json: @telling.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
  end

  def show
  end

  private
  def telling_params
    params.require(:telling).permit(:title, :body, :story_id)
  end
end

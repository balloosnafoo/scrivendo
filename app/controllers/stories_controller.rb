class StoriesController < ApplicationController
  def create
    @story = Story.new(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
  end

  def show
  end

  def update
  end

  def destroy
  end

  private
  def story_params
    params.require(:story).permit(:title, :description)
  end
end

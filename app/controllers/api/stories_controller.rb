class Api::StoriesController < ApplicationController
  def create
    @story = current_user.stories.new(story_params)
    if @story.save
      render json: @story
    else
      render json: @story.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    if params[:user_stories]
      @stories = current_user.stories
    else
      @stories = Story.all
    end
    render :index
  end

  def show
    @story = Story.includes(:tellings).find(params[:id])
    render :show
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

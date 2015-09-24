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
    # @stories = Story.filtered_index(params)
    @stories = current_user.stories
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

class TweetsController < ApplicationController
  def index
    render json: Tweet.all
  end

  def created
    tweet = Tweet.create(body: params[:tweet], user_id: current_user.id)
    render json: tweet
  end
end

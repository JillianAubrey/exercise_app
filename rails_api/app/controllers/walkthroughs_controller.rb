class WalkthroughsController < ApplicationController
    # POST /walkthroughs
    def create
      @walkthrough = Walkthrough.new(walkthrough_params)
  
      if @walkthrough.save
        render json: @walkthrough, status: :created, location: nil
      else
        render json: @walkthrough.errors, status: :unprocessable_entity
      end
    end
  
    private
    # Only allow a list of trusted parameters through.
    def walkthrough_params
      params.require(:walkthrough).permit(
        # create params   
        :workout_id,
        :user_id
      )
    end
end

require 'rails_helper'

RSpec.describe Exercise, type: :model do
  describe 'adding an exercise' do
    before :each do
      @user1 = User.create!({
        name: 'John',
        email: 'john@domain.com',
        password: 'password',
        password_confirmation: 'password'
        })
    end
    it "doesn't add an exercise without a " do
    exercise1 = @user1.exercises.create({
      name: nil, 
      category: 'rest', 
      gif_url: 'https://clipartmag.com/images/water-bottle-clipart-47.jpg'
      })
      expect(exercise1.errors.full_messages).to include("Name can't be blank")
    end
  end
end

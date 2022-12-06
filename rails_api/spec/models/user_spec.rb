require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'adding a user' do
    before :each do
      user1 = User.create!({
        name: 'John',
        email: 'john@domain.com',
        password: 'password',
        password_confirmation: 'password'
      })

      user2 = User.create!({
        name: 'Jane',
        email: 'jane@domain.com',
        password: 'password',
        password_confirmation: 'password'
      })

      user3 = User.create!({
        name: 'Bob',
        email: 'bob@domain.com',
        password: 'password',
        password_confirmation: 'password'
      })
    end
    it "adds email in lowercase when given an uppercase email" do
      user4 = User.create!({
        name: 'Mike',
        email: 'MIKE@domain.com',
        password: 'password',
        password_confirmation: 'password'
      })
      expect(user4.email).to eql('mike@domain.com');
    end
    it "doesn't register a user without an email" do
      user4 = User.create({
        name: 'Mike',
        email: nil,
        password: 'password',
        password_confirmation: 'password'
      })
      expect(user4.errors.full_messages).to include("Email can't be blank")
    end
    it "doesn't register a user with an existing username" do
      user4 = User.create({
        name: 'Bob',
        email: 'bob2@domain.com',
        password: 'password',
        password_confirmation: 'password'
      })
      expect(user4.errors.full_messages).to include("Name has already been taken")
    end
  end
end

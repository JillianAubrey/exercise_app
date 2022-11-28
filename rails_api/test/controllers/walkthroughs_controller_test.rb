require "test_helper"

class WalkthroughsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @walkthrough = walkthroughs(:one)
  end

  test "should get index" do
    get walkthroughs_url, as: :json
    assert_response :success
  end

  test "should create walkthrough" do
    assert_difference('Walkthrough.count') do
      post walkthroughs_url, params: { walkthrough: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show walkthrough" do
    get walkthrough_url(@walkthrough), as: :json
    assert_response :success
  end

  test "should update walkthrough" do
    patch walkthrough_url(@walkthrough), params: { walkthrough: {  } }, as: :json
    assert_response 200
  end

  test "should destroy walkthrough" do
    assert_difference('Walkthrough.count', -1) do
      delete walkthrough_url(@walkthrough), as: :json
    end

    assert_response 204
  end
end

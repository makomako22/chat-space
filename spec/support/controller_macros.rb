module ControllerMacros
  def login_user
    sign_in create(:user)
  end
end

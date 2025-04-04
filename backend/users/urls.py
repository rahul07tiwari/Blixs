from django.urls import path
from users.token import *
from users.views import *

urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomRefreshTokenView.as_view(), name='token_refresh'),
    path('authenticated/', is_authenticated, name='is-authenticated'),
    path('register/', register, name='register'),
    path('logout/', logout, name='logout'),
    path('user/', get_user, name='get-user'),
    path('all/', get_users, name='get-users'),
    path('follow/<int:user_id>/', follow_user, name='follow-user')
]
from django.urls import re_path
from chat import consumers

websocket_urlpatterns = [
	re_path(
		r'ws/users/(?P<userid>\w+)/chat/$', consumers.ChatConsumer.as_asgi()
	),
]
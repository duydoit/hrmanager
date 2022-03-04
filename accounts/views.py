from rest_framework import generics,views
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import User
from .serializer import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework import authentication
import jwt , datetime
from rest_framework import status
# Create your views here.

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class LoginView(views.APIView):
    def post(self, request, *args, **kwargs):
        username = request.data['username']
        password = request.data['password']
  
        user = User.objects.filter(username=username).first()
        if user is None:
            raise AuthenticationFailed("Username not found")
        if not user.check_password(password):
             raise AuthenticationFailed("Incorrect password")
        
        payload = {
            'role': user.role,
            'id': user.id,
            "name": user.username,
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, "secret", algorithm="HS256")
        res = Response()
        res.data = {
            "name": user.username,
            "id": user.id,
            "jwt_token": token,
            "role": user.role,
        }
        return res
        
class LogoutView(views.APIView):
    def get(self, request):
        res = Response()
        res.data = {
            "messages": "Logout success"
        }
        return res


class UserView(views.APIView):
    authentication_classes = [authentication.TokenAuthentication]
    def get(self, request):
        headers_auth = request.headers['Authorization']
        if headers_auth and headers_auth.startswith('Bearer '):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    if payload['role'] in ['admin']:
                        user = User.objects.all().order_by('-id')
                        serializer = UserSerializer(user, many = True)  
                        return Response(serializer.data)
                    return Response("Not found",status.HTTP_404_NOT_FOUND)
                except jwt.ExpiredSignatureError:
                    return False
        return Response("Not found",status.HTTP_404_NOT_FOUND)

class UserDetailView(views.APIView):
    authentication_classes = [authentication.TokenAuthentication]
    def get(self, request,pk):
        headers_auth = request.headers['Authorization']
        if headers_auth and headers_auth.startswith('Bearer '):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    if payload['role'] in ['admin']:
                        user = User.objects.get(id=pk)
                        serializer = UserSerializer(user)  
                        return Response(serializer.data)
                    return Response("Not found",status.HTTP_404_NOT_FOUND)
                except jwt.ExpiredSignatureError:
                    return False
        return Response("Not found",status.HTTP_404_NOT_FOUND)
    def put(self, request,pk):
        headers_auth = request.headers['Authorization']
        if headers_auth and headers_auth.startswith('Bearer '):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    if payload['role'] in ['admin']:
                        user = User.objects.get(id=pk)
                        serializer = UserSerializer(user,data=request.data)  
                        if serializer.is_valid():
                            serializer.save()
                            return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
                        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                except jwt.ExpiredSignatureError:
                    return False
        return Response("Not found",status.HTTP_404_NOT_FOUND)
    def delete(self, request,pk):
        headers_auth = request.headers['Authorization']
        if headers_auth and headers_auth.startswith('Bearer '):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    if payload['role'] in ['admin']:
                        user = User.objects.get(id=pk)
                        user.delete()
                        return Response(status=status.HTTP_204_NO_CONTENT)
                except jwt.ExpiredSignatureError:
                    return False
        return Response("Not found",status.HTTP_404_NOT_FOUND)
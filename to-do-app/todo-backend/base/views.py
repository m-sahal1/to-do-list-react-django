from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer
# Create your views here.

@api_view(['GET'])
def get_task(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def input_task(request):
    new_data=[]
    for i in request.data:
        if i['id']==None:
            new_data.append(i)
        else:
            old_instance= Task.objects.get(id=i['id'])
            old_serializer = TaskSerializer(old_instance, i)
            if old_serializer.is_valid():
                old_serializer.save()

    new_serializer = TaskSerializer( data=new_data, many=True)
    if new_serializer.is_valid():
        new_serializer.save()
        return Response(new_serializer.data)
    else:
        return Response({"Message":"Incorrect input"})

@api_view(['DELETE'])
def delete_task(request,id):
    try:
        task = Task.objects.get(id=id)
        task.delete()
        return Response({"Message":"Item Deleted"})
    except Task.DoesNotExist:
        return Response({"Message":"Item not found"})



# from rest_framework import permissions
#
# #IsAuthorReadOnly can be whatever you want it to be- keep name short and specific
# class IsAuthorReadOnly(permissions.BasePermission):
#     def has_object_permission(self, request, view, obj):
#         if request.method in permissions.SAFE_METHODS:
#             return True
#
#         return obj.user == request.user

#obj is whatever the name is that you created
#user may have a different name- it's whatever the owner is to the foreign key.


            #safe method is get- allowing user to read data, but not do anything with it.
            # this funciton will return true or false.


            # if they're not the creator of the message, they can't do anything with it. If they are the owner, the have full control over it.
            #if they're the owner they can implement full crud on the object, if not the owner, they can not.

            #for project- only owner, or staff user can DELETE

            # -Django rest frame work permissions
            # if you don't create if (no staff permissions), you can only read it.
            # if user created it, they can edit it and delete it
            # if staff- can delete it
            # everyone can read

            #when you go in admin and pull up properties, look at users, and can check whether staff or not. There's a way for you to check if it's a staff level user or not.

#Also for this week:
# room relationship
    # each method should have a relationship to a user, it shoul dalso have a relationship to a "room" (think about slack). When you click on a room name, it only shows the messages associated with THAT room.
    #keep in mind that before a message can be created and have an association with a room, that the ROOM doesn't exist.
    #we can decide whether or not we want to allow people to create rooms or not.
    #a user might be able to create a room.   A user can choose which room to go into to see the messages in that room.

# Relações de Entidades

## User --o RoomReservation : user_id

Indica que um `User` está associado a zero ou muitas instâncias de `RoomReservation` através da chave estrangeira `user_id`.

## Class --o RoomReservation : class_id

Indica que uma `Class` está associada a zero ou muitas instâncias de `RoomReservation` através da chave estrangeira `class_id`.

## Institution --o User : institution_id

Reflete que uma `Institution` está associada a zero ou muitos usuários através da chave estrangeira `institution_id`.

## Course --o Room : course_id

Indica que um `Course` está associado a zero ou muitas instâncias de `Room` através da chave estrangeira `course_id`.

## User --\|> Role : role_id

Representa uma relação de herança indicando que um `User` possui um papel (`Role`) identificado pela chave `role_id`.

## Class --\|> Class_Course : class_id

Representa uma relação de herança indicando que uma `Class` pode estar relacionada a zero ou muitas instâncias de `Class_Course` através da chave `class_id`.

## Course --\|> Class_Course : course_id

Representa uma relação de herança indicando que um `Course` pode estar relacionado a zero ou muitas instâncias de `Class_Course` através da chave `course_id`.

## Course --\|> Institution : institution_id

Indica que um `Course` está associado a uma `Institution` através da chave estrangeira `institution_id`.

## Room --\|> Block : block_id

Indica que uma `Room` está associada a um `Block` através da chave estrangeira `block_id`.

## RoomReservation --\|> Room : room_id

Indica que uma `RoomReservation` está associada a uma `Room` através da chave estrangeira `room_id`.

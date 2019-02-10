angular.module('todoList', [])
    .controller('todoController', ['$scope', todoController]);

function todoController($scope) {
    $scope.todos = [
        { text: 'Learn AngularJS', done: false },
        { text: 'Learn Ruby on Rails', done: false }
    ];

    $scope.save = function () {
        if (!$scope.task) {
            alert('Please write some todo');
            return false;
        } else {
            $scope.todos.push({ text: $scope.task, done: false });
            $scope.task = '';
        }
    };

    $scope.showAllTasks = function () {
        return $scope.todos;
    };

    $scope.showActiveTasks = function () {
        $scope.todos = $scope.todos.filter(function (item) {
            return !item.done;
        });
    };

    $scope.showDoneTasks = function () {
        $scope.todos = $scope.todos.filter(function (item) {
            return item.done;
        });
    };

    $scope.clearDoneTasks = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) {
                $scope.todos.push(todo);
            }
        });
    };
};


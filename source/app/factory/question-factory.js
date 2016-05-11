app.factory('questionServices', function () {
       return{
           get_questions: function(Restangular)
           {
               return Restangular.service('questions/get_question');
           },
           save_answer: function(Restangular)
           {
               return Restangular.service('questions/save_single_question_answer');
           },
           get_all_questions_answer_of_current_user: function(Restangular)
           {
               return Restangular.one('questions/get_all_question_answer_of_current_user');
           },
           clear_user_data: function(Restangular)
          {
            return Restangular.one('questions/delete_all_question_answer_of_current_user');
          },
          get_previous_question_of_current_user: function(Restangular)
          {
            return Restangular.service('questions/get_previous_question');
          }
       }
});
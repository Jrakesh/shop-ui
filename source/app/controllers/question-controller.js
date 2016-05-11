app.controller('questionCtrl', [ '$scope','Restangular','questionServices', 'cookie', 'guestServices', '$window', '$compile', 'toastr', '$parse', 'helper','APP_CONSTANT', function($scope, Restangular, questionServices, cookie, guestServices, $window, $compile, toastr, $parse, helper, APP_CONSTANT) {
	$scope.init = function() {
		Restangular.setDefaultHeaders({'Authentication-Token' : cookie.getCookieId('auth-token'), 'Api-Key' : '1e26686d806d82144a71ea9a99d1b3169adaad917'});
		var questionId = 0, questionnaireId = 0;
		$scope.get_questions(questionId, questionnaireId);
	};

	$scope.isDisabled = false;
	$scope.isText = false;
    $scope.isNumber = false;
    $scope.isMultipleChoice = false;

	$scope.get_questions = function(current_question_id, questionnaire_id) {
		var data = {
			"question_id": current_question_id,
			"questionnaire_id": questionnaire_id
		};
		questionServices.get_questions(Restangular).post(data).then(function(response){
			if (response.status == 0) {
				$scope.create_question(response.data.question, response.data.question_option, response.data.questionnaire_data, response.data.option_title, response.data.question_questionnaire, response.data.questions_count);
			}
			else {
				toastr.success(response.data.message);
			}
			if(response.success){
			}
		});
	};
	$scope.saveAnswer = function (current_question_id, answer, question_option_id, questionnaire_id, option_sequence_All) {
		$scope.isDisabled = true;
        if (answer != undefined) {
        	helper.startSpin();
			var data = {
			  	"answer": [
			  		{
			  			"option_answer": answer,
			  			"option_id": $scope.option_types_id[0],
			  			"option_sequence": option_sequence_All
			  		}
			  	],
			  	"question_id": current_question_id,
			  	"questionnaire_id": questionnaire_id
			};
	        questionServices.save_answer(Restangular).post(data).then(function(response){
				if(response){
					if (response.data.code == -2) {
						angular.element(document.getElementsByClassName('question-div')).remove();
						questionServices.get_all_questions_answer_of_current_user(Restangular).get().then(function(response){
							if (response.status == 0) {
								angular.forEach(response.data["question_data"], function(question, index) {
									question_id = question.id;
									question_title = question.title;
									question_type = response.data["question_type"][index];
									answer = response.data["answers"][index];
									question_type_data = response.data["question_type_data"][index]
									$scope.create_question_for_all_questions(question_id, question_title, question_type, question_type_data, answer);
								});
								toastr.success(response.data.message);
								$scope.get_questions(current_question_id, questionnaire_id);
								helper.stopSpin();
							}
						});
					}
					if (response.data.code == -1) {
						toastr.success(response.data.message);
						$scope.isDisabled = false;
						$scope.get_questions(current_question_id, questionnaire_id);
						helper.stopSpin();
					}
					if (response.data.code == undefined) {
						toastr.success(APP_CONSTANT.SAVE_SUCCESS);
						$scope.isDisabled = false;
						$scope.get_questions(current_question_id, questionnaire_id);
						helper.stopSpin();
					}
				}
			});
        }
        else {
        	jQuery(".single").fadeOut(500);
        	jQuery(".single").fadeIn(500);
        }
    };
    $scope.tag = 1;
    $scope.create_question = function (question, question_option, questionnaire_data, option_title, question_questionnaire, questions_count) {
        var index_global = 0;
        var html = "";
        $scope.questionId = question.id;
        $scope.textQuestion = question.title;
        $scope.tagline = question.tagline;
        if($scope.tagline == "None") {
        	$scope.tag = 0;
        }
        else {
        	$scope.tag = 1;
        }
        $scope.questionnaire_title = questionnaire_data[0].title;
        $scope.questionnaire_id = questionnaire_data[0].id;
        $scope.questionnaire_sequence = questionnaire_data[0].sequence;
        $scope.question_option = question_option;
        $scope.option_types_id = [];
        $scope.question_option_id = question_option[0].id;
        $scope.option_title = option_title;
        $scope.questions_count = questions_count;
        $scope.question_questionnaire_sequence = question_questionnaire.sequence;
        var arr = [], help_text_array = [];
        angular.forEach(question_option, function(id, index) {
        	arr.push(id.option_types_id);
        });
        $scope.option_types_id = arr;

  		if (question.question_types_id == 1) {
  			html = '<createinfo></createinfo>';
  		}
  		if (question.question_types_id == 2) {
  			html = '<createsingleselectionbutton></createsingleselectionbutton>';
  		}
  		if (question.question_types_id == 3) {
  			html = '<createquestionmultiplechoice></createquestionmultiplechoice>';
  		}
  		if (question.question_types_id == 4) {
  			html = '<createquestiontext></createquestiontext>';
  		}
  		if (question.question_types_id == 5) {
  			html = '<createquestionnumber></createquestionnumber>';
  		}
  		if (question.question_types_id == 6) {
  			html = '<createquestionmix></createquestionmix>';
  		}
  		if (question.question_types_id == 7) {
  			html = '<createquestiondropdown></createquestiondropdown>';
  		}
  		if (question.question_types_id == 8) {
  			html = '<createquestiontext></createquestiontext>';
  		}

		$scope.create_question_common(html, $scope.questionId, index_global);
    };
    //Function for selecting options
    $scope.getSpanValue = function(id, val, questionnaire_id) {
		var id = id;
		var val = val;
		var questionnaire_id = questionnaire_id;
    	$scope.saveAnswer(id, val, questionnaire_id);
    };
    $scope.saveSelectAnswer = function(id, index, questionnaire_id) {
  		var optionValue = "";
  		var questionnaire_id = questionnaire_id;
  		optionValue = angular.element(document.getElementById('question_'+$scope.questionId+'_option_0')).attr('value');
  		$scope.saveAnswer(id, optionValue, questionnaire_id);
  	};
	$scope.showPreviousQuestion = function(questionId, questionnaireId) {
		var data = {
			question_id: questionId,
			questionnaire_id: questionnaireId
		};
		questionServices.get_previous_question_of_current_user(Restangular).post(data).then(function(response) {
			if(response) {
				$scope.create_question(response.data.question, response.data.question_option, response.data.questionnaire_data, response.data.option_title, response.data.question_questionnaire, response.data.questions_count);
			}
			else {
				toastr.error("Something went wrong");
			}
		});
	};
    $scope.checkKeyPress = function(id, val, question_option_id, questionnaire_id) {
    	var id = id;
		var val = val;
		var question_option_id = question_option_id;
		var questionnaire_id = questionnaire_id;
		var option_sequence_All = $scope.question_option[0].sequence;
    	$scope.saveAnswer(id, val, question_option_id, questionnaire_id, option_sequence_All);
    };
    $scope.optionAnswerModel = [];
    $scope.multipleAnswer = 1;
    $scope.optionIndex;
    $scope.checkKeyPressMultiple = function(id, questionnaire_id) {
		var id = id, questionnaire_id = questionnaire_id, optionAnswer = [], optionTypeId = [];
		optionAnswerModel = $scope.optionAnswerModel;
		optionAnswerModel.push($scope.date);
		//for clearing the date for next question
		$scope.date = '';

		//for clearing the optionAnswerModel for next question
		$scope.optionAnswerModel = [];

		optionTypeId = $scope.option_types_id;
    	$scope.saveMultipleAnswer(id, optionAnswerModel, optionTypeId, questionnaire_id);
    };
    $scope.getNewMember = function(id) {
    	var html = '<randomquestionoptions class="random-section"></randomquestionoptions>';
    	angular.element(document.getElementById('answer-block-mix')).append($compile(html)($scope));
    	angular.element(document.getElementsByClassName('section-two-getting-started')).css('overflow', 'auto');
    };
    $scope.saveMultipleAnswer = function (current_question_id, answer, optionTypeId, questionnaire_id) {
		$scope.isDisabled = true;
		var arr = [], i = 0;
        if (answer != undefined) {
        	helper.startSpin();
        	var data = {
			  	"answer": [],
			  	"question_id": current_question_id,
			  	"questionnaire_id": questionnaire_id
			};
			for (i=0; i<answer.length; i++) {
				data.answer.push({"option_answer": answer[i], "option_Id": optionTypeId[i], "option_sequence": $scope.question_option[i].sequence});
			}
 
	        questionServices.save_answer(Restangular).post(data).then(function(response){
				if(response){
					if (response.data.code == -2) {
						angular.element(document.getElementsByClassName('question-div')).remove();
						questionServices.get_all_questions_answer_of_current_user(Restangular).get().then(function(response){
							if (response.status == 0) {
								angular.forEach(response.data["question_data"], function(question, index) {
									question_id = question.id;
									question_title = question.title;
									question_type = response.data["question_type"][index];
									answer = response.data["answers"][index];
									question_type_data = response.data["question_type_data"][index]
									$scope.create_question_for_all_questions(question_id, question_title, question_type, question_type_data, answer);
								});
								toastr.success(response.data.message);
								$scope.get_questions(current_question_id, questionnaire_id);
								helper.stopSpin();
							};
						});
					};
					if (response.data.code == -1) {
						toastr.success(response.data.message);
						$scope.isDisabled = false;
						$scope.get_questions(current_question_id, questionnaire_id);
						helper.stopSpin();
					};
					if (response.data.code == undefined) {
						toastr.success(APP_CONSTANT.SAVE_SUCCESS);
						$scope.isDisabled = false;
						$scope.get_questions(current_question_id, questionnaire_id);
						helper.stopSpin();
					};
				}
			});
        }
        else {
        	jQuery(".multiple").fadeOut(500);
        	jQuery(".multiple").fadeIn(500);
        }
    };
    $scope.create_question_for_all_questions = function (questionId, question, question_type_data, tagline, answer) {
        var index_global = 0;
        var html = "<form><div class='question-div' du-smooth-scroll du-scrollspy><h1 class='question-h1'>" + question;
        if(question_type_data == 4) {
        	html = '<createinfo></createinfo>'
        };
		if (question_type_data == 1) {
			html = '<createquestiontext></createquestiontext>';
		};
		if (question_type_data == 2) {
			html = '<createquestionnumber></createquestionnumber>';
		};
		if (question_type_data == "radio") {
			var radio_data = '';
			html = html	+ "</h1>";
            angular.forEach(question_type_data["key"], function(key,index) {
              radio_data = radio_data + '<input ng-required="' + "!asd" + questionId + '" type="radio" class="radio-button-large" id="question_'+ questionId + index + '" name="' + questionId + '" ng-model="' + 'asd' + questionId + '" value = "' + question_type_data["value"][index] + '"/><span class="radio-text">'+ question_type_data["value"][index] + '</span></br>';
              index_global = index;	
            });
			html = html	+ radio_data + "<button class='btn btn-lg btn-hire wow animated zoomIn button-margin' ng-disabled='isDisabled' ng-model='isDisabled' ng-click='saveAnswer(" + questionId + ',' + 'asd' + questionId + ")' addquestion>Save</button></div></form>";
		};
		if (question_type_data == 3) {
			html = '<createquestionmultiplechoice></createquestionmultiplechoice>';
		};
		if(question_type_data == 10) {
			html = '<createquestionmix></createquestionmix>';
		}

		$scope.create_question_common(html, questionId, index_global);
		var the_string = 'asd' + question_id;
		var model = $parse(the_string);
		model.assign($scope, answer);
    };

    $scope.create_question_common = function (html, questionId, index_global) {
       	angular.element(document.getElementById('questionsDiv')).html($compile(html)($scope));
		var element = $window.document.getElementById("question_"+ questionId + index_global);
    }
	$scope.goToHome = function() {
		$scope.setMainContentUrl("source/views/clear-user-data.html");
	}
}]);

app.directive('createquestiontext', function($compile) {
	return{
		restrict: 'E',
		link: function($scope, element, attrs) {
	 		var html = '<div  class="full-width pull-left getting-started">'+
					'<header class="header">'+
						'<div class="header-details">'+
							'<label class="pull-left header-label-left">Instacut Jerkys</label>'+
							'<label class="pull-right header-label-right"><a href="#">Save<i class="fa fa-caret-down caret-icon"></i></a></label>'+
							'<label class="pull-right header-label-right"><a href="#" ng-click="goToHome()">Cancel</a></label>'+
						'</div>'+
					'</header>'+
					'<div class="main-content pull-left">'+
						'<form name="answer-section" ng-submit="checkKeyPress('+$scope.questionId+', answer'+$scope.questionId+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
							'<div class="products-details">{{questionnaire_title}}</div>'+
							'<div class="pull-left section-one section-one-getting-started"></div>'+
							'<div class="navigation-icon-getting-started">'+
								'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
							'</div>'+
							'<div class="pull-left section-two second-section section-two-getting-started">'+
								'<div class="info-block">'+
									'<div class="question-block">'+
										'<div class="content-details pull-left content-statement">'+
											'<span ng-if="tag">{{tagline}}</span>'+
											'<span class="colored-label colored-label-getting-started">{{textQuestion}}</span>'+
										'</div>'+
									'</div>'+
									'<div class="answer-block">'+
										'<div id="answer-section" class="single question-text-section question-text-section-getting-started" ng-enter="checkKeyPress('+$scope.questionId+', answer'+$scope.questionId+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
											'<p>Name your first product</p>'+
											'<input class="text-input-details" name="text-answer" type="'+$scope.questionType+'" id="question_'+$scope.questionId+'0" ng-model= "answer'+$scope.questionId+'" required="">'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="navigation-icon-getting-started">'+
								'<div class="forward-icon forward-icon-getting-started"><input type="submit" class="submit-icon" value="'+">"+'"></div>'+
							'</div>'+
							'<div class="pull-left section-three section-three-getting-started"></div>'+
						'</form>'+
					'</div>'+
					'<div class="nav-thumbs">'+
				        '<ul class="navigation-list" style="visibility: hidden">'+
				            '<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
				            '<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
				            '<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
				        '</ul>'+
				    '</div>'+
		    	'</div>';
	 		element.html($compile(html)($scope));
	 	}		
	}
});

app.directive('createsingleselectionbutton', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attrs, $index) {
			var question_options = $scope.question_options;
			var html = '<div  class="full-width pull-left getting-started">'+
				'<header class="header">'+
					'<div class="header-details header-details-getting-started">'+
						'<label class="pull-left header-label-left"></label>'+
						'<label class="pull-right header-label-right"><a href="#"></a></label>'+
						'<label class="pull-right header-label-right"><a href="design_dashboard.html"></a></label>'+
					'</div>'+
				'</header>'+
				'<div class="main-content pull-left">'+
					'<div class="products-details">{{questionnaire_title}}</div>'+
					'<div class="pull-left section-one section-one-getting-started"></div>'+
					'<div class="navigation-icon-getting-started">'+
						'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
						//'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><i class="fa fa-angle-left fa-2x"></i></div></a>'+
					'</div>'+
					'<div class="pull-left section-two second-section section-two-getting-started">'+
						'<div class="info-block">'+
							'<div class="question-block">'+
								'<div class="content-details pull-left content-statement">'+
									'<span ng-if="tag">{{tagline}}</span>'+
									'<span class="colored-label-getting-started">{{textQuestion}}</span>'+
								'</div>'+
							'</div>'+
							'<div>'+
								'<div class = "select-guest-question" ng-model="answer'+$scope.questionId+'">'+
									'<div questionoption></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="navigation-icon-getting-started">'+
						'<a href="#">'+
							'<div class="forward-icon forward-icon-hidden">'+
							'</div>'+
						'</a>'+
					'</div>'+
					'<div class="pull-left section-three section-three-getting-started"></div>'+
				'</div>'+
				'<div class="nav-thumbs">'+
			        '<ul class="navigation-list" style="visibility: hidden">'+
			            '<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="4 bullet-details" data-slide="4">4</a></li>'+
			        '</ul>'+
			    '</div>'+
	    	'</div>';
	    	element.html($compile(html)($scope));
		}
	}
});

app.directive('createquestionmultiplechoice', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attrs, $index) {
			var question_options = $scope.question_options;
			var html = '<div  class="full-width pull-left getting-started">'+
				'<header class="header">'+
					'<div class="header-details header-details-getting-started">'+
						'<label class="pull-left header-label-left"></label>'+
						'<label class="pull-right header-label-right"><a href="#"></a></label>'+
						'<label class="pull-right header-label-right"><a href="design_dashboard.html"></a></label>'+
					'</div>'+
				'</header>'+
				'<div class="main-content pull-left">'+
					'<div class="products-details">{{questionnaire_title}}</div>'+
					'<div class="pull-left section-one section-one-getting-started"></div>'+
					'<div class="navigation-icon-getting-started">'+
						'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
						//'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><i class="fa fa-angle-left fa-2x"></i></div></a>'+
					'</div>'+
					'<div class="pull-left section-two second-section section-two-getting-started">'+
						'<div class="info-block">'+
							'<div class="question-block">'+
								'<div class="content-details pull-left content-statement">'+
									'<span ng-if="tag">{{tagline}}</span>'+
									'<span class="colored-label-getting-started">{{textQuestion}}</span>'+
								'</div>'+
							'</div>'+
							'<div>'+
								'<div class = "select-guest-question" ng-model="answer'+$scope.questionId+'">'+
									'<div questionoption></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="navigation-icon-getting-started">'+
						'<a href="#">'+
							'<div class="forward-icon forward-icon-hidden">'+
							'</div>'+
						'</a>'+
					'</div>'+
					'<div class="pull-left section-three section-three-getting-started"></div>'+
				'</div>'+
				'<div class="nav-thumbs">'+
			        '<ul class="navigation-list" style="visibility: hidden">'+
			            '<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="4 bullet-details" data-slide="4">4</a></li>'+
			        '</ul>'+
			    '</div>'+
	    	'</div>';
	    	element.html($compile(html)($scope));
		}
	}
});

app.directive('createquestionnumber', function($compile) {
	return  {
		restrict: 'E',
		link: function($scope, element, attrs) {
			var html = '<div  class="full-width pull-left getting-started">'+
				'<header class="header">'+
					'<div class="header-details">'+
						'<label class="pull-left header-label-left">Instacut Jerkys</label>'+
						'<label class="pull-right header-label-right"><a href="#">Save<i class="fa fa-caret-down caret-icon"></i></a></label>'+
						'<label class="pull-right header-label-right"><a href="#" ng-click="goToHome()">Cancel</a></label>'+
					'</div>'+
				'</header>'+
				'<div class="main-content pull-left">'+
					'<form name="answer-section" ng-submit="checkKeyPress('+$scope.questionId+', answer'+$scope.questionId+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
						'<div class="products-details">{{questionnaire_title}}</div>'+
						'<div class="pull-left section-one section-one-getting-started"></div>'+
						'<div class="navigation-icon-getting-started">'+
							'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
						'</div>'+
						'<div class="pull-left section-two second-section section-two-getting-started">'+
							'<div class="number-section">'+
								'<div class="number-question-details">'+
									'<div class="content-details pull-left content-statement content-statement-number content-statement-number-getting-started">'+
										'<span ng-if="tag">{{tagline}}</span>'+
										'<span class="colored-label colored-label-getting-started">{{textQuestion}}</span>'+
									'</div>'+

									'<div class="single question-number-section question-number-section-getting-started" ng-enter="checkKeyPress('+$scope.questionId+', answer'+$scope.questionId+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
										'<p class="price-tag"></p>'+
										'<input class="text-input-details blinking-cursor" name="number-answer" type="'+$scope.questionType+'" id="question_'+$scope.questionId+'0" ng-model= "answer'+$scope.questionId+'" pattern="[-]?[0-9]+[\.]?[0-9]+" min="0" required="">'+
									'</div>'+
								'</div>'+
							'</div>'+
							'<div class="comment-details comment-details-getting-started">'+
								'<label>Just take a guess and you can always adjust values later!</label>'+
							'</div>'+
						'</div>'+
						'<div class="navigation-icon-getting-started">'+
							'<div class="forward-icon forward-icon-getting-started"><input type="submit" class="submit-icon" value="'+">"+'"></div>'+
						'</div>'+
						'<div class="pull-left section-three section-three-getting-started"></div>'+
					'</form>'+
				'</div>'+
				'<div class="nav-thumbs">'+
			        '<ul class="navigation-list" style="visibility: hidden">'+
			            '<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
			            '<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
			        '</ul>'+
			    '</div>'+
			'</div>';
			element.html(($compile(html))($scope));
		}
	}
});

app.directive('createquestionmix', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attrs) {
			var questionHtml = '';
			var saveAnswerHtml;
			questionHtml = '<randomquestionoptions class="random-section"></randomquestionoptions>';
			saveAnswerHtml = '<savemultipleanswersection></savemultipleanswersection>';

			var html = '<div  class="full-width pull-left getting-started">'+
				'<header class="header">'+
					'<div class="header-details">'+
						'<label class="pull-left header-label-left">Instacut Jerkys</label>'+
						'<label class="pull-right header-label-right"><a href="#">Save<i class="fa fa-caret-down caret-icon"></i></a></label>'+
						'<label class="pull-right header-label-right"><a href="#" ng-click="goToHome()">Cancel</a></label>'+
					'</div>'+
				'</header>'+
				'<div class="main-content pull-left">'+
					'<form name="answer-section" ng-submit="checkKeyPressMultiple('+$scope.questionId+', '+$scope.questionnaire_id+')">'+
						'<div class="products-details">{{questionnaire_title}}</div>'+
						'<div class="pull-left section-one section-one-getting-started"></div>'+
						'<div class="navigation-icon-getting-started">'+
							'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
						'</div>'+
						'<div class="pull-left section-two second-section section-two-getting-started" id="second-section-wrap">'+
							'<div class="info-block info-block-mix">'+
								'<div class="question-block question-block-mix">'+
									'<div id="question-info" class="content-details pull-left content-statement">'+
										'<span ng-if="tag">{{tagline}}</span>'+
										'<span class="colored-label-getting-started">{{textQuestion}}</span>'+
									'</div>'+
								'</div>'+
								'<div class="answer-block" id="answer-block-mix">'+
									questionHtml +
								'</div>'+
							'</div>'+
						'</div>'+ saveAnswerHtml +
						'<div class="pull-left section-three section-three-getting-started visibility-hidden"></div>'+
						'<div class="nav-thumbs">'+
				        	'<ul class="navigation-list" style="visibility: hidden">'+
				            	'<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
				        	'</ul>'+
				    	'</div>'+
					'</form>'+
				'</div>'+
			'</div>';
			element.html(($compile(html))($scope));
		}
	}
});

app.directive('createinfo', function($compile) {
	return{
		restrict: 'E',
		link: function($scope, element, attrs) {
			var html = '<div  class="full-width pull-left getting-started">'+
				'<header class="header">'+
					'<div class="header-details" style="visibility: hidden;">'+
						'<label class="pull-left header-label-left">Instacut Jerkys</label>'+
						'<label class="pull-right header-label-right"><a href="#">Save<i class="fa fa-caret-down caret-icon"></i></a></label>'+
						'<label class="pull-right header-label-right"><a href="#" ng-click="goToHome()">Cancel</a></label>'+
					'</div>'+
				'</header>'+
				'<div class="main-content pull-left">'+
					'<form name="answer-section" ng-submit="checkKeyPress('+$scope.questionId+', '+0+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
						'<div class="products-details">{{questionnaire_title}}</div>'+
						'<div class="pull-left section-one section-one-getting-started visibility-hidden"></div>'+
						'<div class="navigation-icon-getting-started">'+
							'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><input type="text" class="submit-icon submit-icon-left" value="'+"<"+'"></div></a>'+
							//'<a href="#" ng-click="showPreviousQuestion('+$scope.questionId+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><i class="fa fa-angle-left fa-2x"></i></div></a>'+
						'</div>'+
						'<div class="pull-left section-two second-section section-two-getting-started">'+
							'<div class="content-details pull-left margin-page-content">'+
								'<div>'+
									'<span ng-if="tag">{{tagline}}</span>'+
									'<span class="colored-label colored-label-getting-started">{{textQuestion}}</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
						'<div class="navigation-icon-getting-started">'+
							'<div class="forward-icon forward-icon-getting-started"><input type="submit" class="submit-icon" value="'+">"+'"></div>'+
							//'<a href="#" ng-click="checkKeyPress('+$scope.questionId+', '+0+', '+$scope.question_option_id+', '+$scope.questionnaire_id+')"><div class="forward-icon forward-icon-getting-started"><i class="fa fa-angle-right fa-2x"></i></div></a>'+
						'</div>'+
						'<div class="pull-left section-three section-three-getting-started"></div>'+
						'<div class="nav-thumbs">'+
				        	'<ul class="navigation-list" style="visibility: hidden">'+
				            	'<li><a href="#" class="1 bullet-details" data-slide="1">1</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="2 bullet-details" data-slide="2">2</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
				            	'<li><label class="nav-bridge">----------</label><a href="#" class="3 bullet-details" data-slide="3">3</a></li>'+
				        	'</ul>'+
				    	'</div>'+
					'</form>'+
				'</div>'+
			'</div>';
			element.html($compile(html)($scope));
		}
	}
});

app.directive('questionoption', function($compile){
	return {
		restrict: 'A',
		link: function($scope, element, attrs, $index, ngModel) {
			var html = '<div class="option-container" ng-repeat="option_text in question_option[0].metadata_json.option.text" tabindex="{{$index + 1}}" ng-enter="checkKeyPress('+$scope.questionId+' ,option_text, '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
				'<a href="# ">'+
					'<div id="option{{$index + 1}}" class="option-container option-details option-details-getting-started" ng-click="checkKeyPress('+$scope.questionId+' ,option_text, '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
						'<div class="option-text-details option-text-details-getting-started">'+
							'<span value = "{{option_text}}" ng-required="!answer['+$scope.questionId+']" id="question_'+$scope.questionId+'_option_{{$index}}">{{option_text}}</span>'+
						'</div>'+
						'<span class="icon-details icon-details-getting-started">'+
							'<i class="fa fa-angle-right fa-2x"></i>'+
						'</span>'+
					'</div>'+
				'</a>'+
			'</div>';
			element.html($compile(html)($scope));
		}
	}
});

app.directive('selectable', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function(e) {
            	var idVal = element.attr('id');
            	$('#'+idVal).css('background', 'yellow');
                $(".activeness").each(function() {
                $(this).removeClass('activeness');
              });
              element.addClass('activeness');
              scope.$apply(attrs.selectable);
            });
        }
    }
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                    element.css('background', 'yellow');
					$(".activeness").each(function() {
						$(this).removeClass('activeness');
					});
        	        element.addClass('activeness');
              		scope.$apply(attrs.selectable);
                });

                event.preventDefault();
            }
        });
    };
});

app.directive('randomquestionoptions', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attrs) {
			var html = '<div class="input-mix-section">';
			angular.forEach($scope.question_option, function(question_options, index) {
				if($scope.option_title[index] == "text") {
					html += '<div class="multiple question-text-section question-text-section-getting-started">'+
						'<p>Name your first product</p>'+
						'<input class="text-input-details" type="text" id="question_'+$scope.questionId+'0" ng-model= "optionAnswerModel[' + index + ']" required="">'+
					'</div>';
				}
				if($scope.option_title[index] == "number") {
					html += '<div class="multiple question-number-section colored question-number-section-getting-started answer-field-details">'+
						'<p>Price it.</p>'+
						'<input class="text-input-details blinking-cursor" type="text" id="question_'+$scope.questionId+'0" ng-model= "optionAnswerModel[' + index + ']" pattern="[-]?[0-9]+[\.]?[0-9]+" min="0" required="">'+
					'</div>';
				}
				if($scope.option_title[index] == "dollar_value") {
					html += '<div class="multiple question-number-section colored question-number-section-getting-started answer-field-details">'+
						'<p>Price it.</p>'+
						'<label>$</label><input class="text-input-details blinking-cursor" type="text" id="question_'+$scope.questionId+'0" ng-model= "optionAnswerModel[' + index + ']" pattern="[-]?[0-9]+[\.]?[0-9]+" min="0" required="">'+
					'</div>';
				}
				if($scope.option_title[index] == "dropdown") {
					html += '<div class="multiple input-section-select input-section-select-getting-started answer-field-details select-details">'+
						'<div style="display: inline-block; float: left; width: 2vw; padding: 2vmin 0px 0px 0vmin;">per</div>'+
						'<select ng-model= "optionAnswerModel[' + index + ']" required="">'+
							'<option value="">Select</option>'+
							'<option ng-repeat="val in question_option['+index+'].metadata_json.option.text" value="{{val}}">{{val}}</option>'+
						'</select>'+
					'</div>';
				}
				if($scope.option_title[index] == "basic_dropdown") {
					html += '<div class="multiple input-section-select input-section-select-getting-started answer-field-details select-details">'+
						'<select ng-model= "optionAnswerModel[' + index + ']" required="">'+
							'<option value="">Select</option>'+
							'<option ng-repeat="val in question_option['+index+'].metadata_json.option.text" value="{{val}}">{{val}}</option>'+
						'</select>'+
					'</div>';
				}
				if($scope.option_title[index] == "plus_button") {
					html += '<div class="plus-btn">'+
						'<a href="#" ng-click="getNewMember('+$scope.questionId+')">'+
							'<div class="forward-icon forward-icon-getting-started">'+
								'<i class="fa fa-plus fa-2x plus-icon"></i>'+
							'</div>'+
						'</a>'+
					'</div>';
				}
				if($scope.option_title[index] == "single_selection_button") {
					html += '<div class = "multiple select-guest-question-mix" ng-model="answer'+$scope.questionId+'">'+
						'<div class="option-container" ng-repeat="option_text in question_option[0].metadata_json.option.text" tabindex="{{$index + 1}}" ng-enter="checkKeyPress('+$scope.questionId+' ,option_text, '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
							'<a href="# ">'+
								'<div id="option{{$index + 1}}" class="option-container option-details option-details-getting-started" ng-click="checkKeyPress('+$scope.questionId+' ,option_text, '+$scope.question_option_id+', '+$scope.questionnaire_id+')">'+
									'<div class="option-text-details option-text-details-getting-started">'+
										'<span value = "{{option_text}}" ng-required="!answer['+$scope.questionId+']" id="question_'+$scope.questionId+'_option_{{$index}}">{{option_text}}</span>'+
									'</div>'+
									'<span class="icon-details icon-details-getting-started">'+
										'<i class="fa fa-angle-right fa-2x"></i>'+
									'</span>'+
								'</div>'+
							'</a>'+
						'</div>'+
					'</div>';
				}
				if($scope.option_title[index] == "percentage") {
					html += '<div class="multiple input-section-mix colored question-number-section-getting-started answer-field-details">'+
						'<p>Price it.</p>'+
						'<input class="text-input-details blinking-cursor" type="text" id="question_'+$scope.questionId+'0" ng-model= "optionAnswerModel[' + index + ']" pattern="[-]?[0-9]+[\.]?[0-9]+" min="0" required="">'+
					'</div>';
				}
				if($scope.option_title[index] == "checkbox") {
					html += '<div class="multiple colored question-number-section-getting-started answer-field-details">'+
						'<p></p>'+
						'<label>Value<input class="text-input-details checkbox blinking-cursor" type="checkbox" id="question_'+$scope.questionId+'0" ng-model= "optionAnswerModel[' + index + ']"></label>'+
					'</div>';
				}
				if($scope.option_title[index] == "date") {
					html += '<div class="multiple colored question-number-section-getting-started answer-field-details">'+
						'<p>Date</p>'+
						'<datepicker>'+
						  '<input class="text-input-details date-details date-details" ng-model="date" type="text" required=""/>'+
						'</datepicker>'+
					'</div>';
				}
			});
			html += '</div>';
			element.html($compile(html)($scope));
		}
	}
});

app.directive('savemultipleanswersection', function($compile) {
	return {
		restrict: 'E',
		link: function($scope, element, attrs) {
			var html = '<div class="navigation-icon-getting-started">'+
				'<div class="forward-icon forward-icon-getting-started">'+
					'<input type="submit" class="submit-icon" value="'+">"+'">'+
				'</div>'+
			'</div>';
			element.html($compile(html)($scope));
		}
	}
});

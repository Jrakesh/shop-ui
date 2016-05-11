function addExpense() {
	document.getElementById('overhead-table-section').style.visibility = 'visible';
	document.getElementById('overhead-popup').style.display = 'block';
	document.getElementById('add-expense-popup').style.display = 'none';
}
function overhead() {
	document.getElementById('add-margin-popup').style.display = 'block';
	// document.getElementById('fixed-cost-popup').style.bottom = '2%';
	document.getElementById('expense-opacity-section').style.display = 'block';
	document.getElementById('overhead-popup').style.display = 'none';
}
function talkProfit() {
	document.getElementById('profit-popup').style.display = 'block';
	document.getElementById('fixed-cost-popup').style.display = 'none';
}
function addProduct() {
	document.getElementById('product-popup').style.display = 'block';
	document.getElementById('add-Product-btn').style.display = 'block';
	document.getElementById('result-popup').style.display = 'none';
}
function showShadow() {
	document.getElementById('add-opacity-section').style.display = 'block';
	document.getElementById('sales-popup').style.display = 'block';
	document.getElementById('total-cost-popup').style.display = 'block';
	document.getElementById('expense-opacity-section').style.display = 'none';
	document.getElementById('profit-popup').style.display = 'none';
}
function showDashboard() {
	document.getElementById('create-projection').style.display = 'block';
	document.getElementById('dashboard-opacity-details').style.display = 'none';
}
function goNewPage() {
	window .location = "design_report_with_expenses.html";
	removePopup();
}
function removePopup() {
	document.getElementById('add-expense-popup').style.display = 'none';
}
function showAddProduct() {
	// document.getElementById('overhead-table-section').style.visibility = 'visible';
	document.getElementById('new-product-popup').style.display = 'block';
	document.getElementById('cogs-popup').style.display = 'none';
}
function showFixedCostPopup() {
	document.getElementById('fixed-cost-popup').style.display = 'block';
	document.getElementById('new-product-popup').style.display = 'none';
}
function showProfit() {
	$(".profit-values-details").removeClass('visibility-hidden');
	document.getElementById('add-capital-popup').style.display = 'block';
	document.getElementById('profit-popup').style.display = 'none';
}
function showProjectChart() {
	document.getElementById('chart-projection').style.display = 'block';
	document.getElementById('add-capital-popup').style.display = 'none';
}
function showProjectionOptions() {
	document.getElementById('projection-options').style.display = 'block';
	document.getElementById('chart-projection').style.display = 'none';
}

jQuery(function() {
	var secondSection, questionHeight, headerHeight, headerSectionHeight, questionPosition;

	secondSection = $('.second-section').innerHeight();
	optionHeight =  $('.select-guest-question').innerHeight();
	questionHeight = $('.content-statement-multiple').innerHeight();
	headerHeight = $('.header').innerHeight();
	headerSectionHeight = $('.products-details').innerHeight();
	questionPosition = headerHeight + headerSectionHeight;
	// For options position
	if(optionHeight>= 475) {
		var top = ((optionHeight- 475)/2);
		$('.second-section').css('height', 475);
		$('.select-guest-question').css({
			'padding': '0',
			'position': 'relative',
			'bottom': top
		});
	}
	else {
		$('.select-guest-question').css({
			'padding': '0',
			'position': 'relative',
			'top': (secondSection/2) - (optionHeight/2)
		});
	}

	// For positioning number type question
	var  topValue = 0;
	topValue = (($('.second-section').innerHeight() - $('.number-section').innerHeight())/2);
	$('.number-question-details').css('top', topValue);
	topValueForExpense = (($('.second-section').innerHeight() - $('.expenses-details').innerHeight())/2);
	$('.expenses-details').css('top', topValueForExpense);

	// For question position
	$('.content-statement-multiple').css({
			'padding': '0',
			'position': 'relative',
			'top': questionPosition
	});
	var listWidth = jQuery('.navigation-list').innerWidth();
	var seconsSectionWidth = jQuery('.second-section').innerWidth();
	jQuery('.navigation-list').css('right', ((seconsSectionWidth - listWidth)/2));

	var id = getParameterByName('id');
	var n = 0;
	$('.nav-thumbs ul.navigation-list li:nth-child(-n+'+ id +')').each(function() {
		$(this).addClass('active');
	});
});


function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
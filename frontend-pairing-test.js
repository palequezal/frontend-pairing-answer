var CommentForm = {
	onSubmit: function() {
		var data = $("#frmComment").serializeArray();
		var errors = CommentForm.checkErrors(data);

		if (errors.length > 0) {
			$("#comments").html("");
			CommentForm.renderErrors(errors);
		}
		else {
			$("#errors").html("");
			$("#comments").html(Messages.commentsHeading + Messages.commentFormat(data[0].value, data[1].value));
		}
	},

	checkErrors: function(data) {
		var errors = [];

		$.each(data, function (index, field) {
			if (field.value == "") {
				errors.push(Messages.errorFormat(field.name));
			}
		});

		return errors;
	},

	renderErrors: function(errors) {
		$("#errors").html(Messages.errorHeading + errors.join("")).removeClass("hidden");
	},

	clearInputs: function() {
		$("input").each(function (index, value) {
			$(this).val("");
		});
	}
}

var Messages = {
	commentsHeading: `<h2>Comments</h2>`,
	errorHeading: `<h2 class='error'>There are one or more errors on this page</h2>`,
	
	errorFormat: function(fieldName) {
		return `<p>You need to provide a value for <a href="#${fieldName}">${fieldName.substring(3)}</a>.</p>`;
	},

	commentFormat: function(name, comment) {
		return `<div class='comment'>
					<p><span class='leftby'>left by</span> <strong>${name}</strong></p>
					<p>${comment}</p>
				</div>`;
	}
}
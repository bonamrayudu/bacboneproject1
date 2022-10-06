//create  Backbone Model

var Blog = Backbone.Model.extend({
	defaults: {
		pancard: '',
		phone: '',
		gmail: ''
	}
});

// create Backbone Collection

var Blogs = Backbone.Collection.extend({});



// instantiate a Collection

var blogs = new Blogs();

// Backbone View for one blog

var BlogView = Backbone.View.extend({
	model: new Blog(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.blogs-list-template').html());
	},
	events: {
		'click .edit-blog': 'edit',
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'
	},
	edit: function() {
		$('.edit-blog').hide();
		$('.delete-blog').hide();
		this.$('.update-blog').show();
		this.$('.cancel').show();

		var author = this.$('.pancard').html();
		var title = this.$('.phone').html();
		var url = this.$('.gmail').html();

		this.$('.pancard').html('<input type="text" class="form-control pancard-update" value="' + pancard + '">');
		this.$('.phone').html('<input type="text" class="form-control phone-update" value="' + phone + '">');
		this.$('.gmail').html('<input type="text" class="form-control gmail-update" value="' + gmail + '">');
	},
	update: function() {
		this.model.set('pancard', $('.pancard-update').val());
		this.model.set('phone', $('.phone-update').val());
		this.model.set('gmail', $('.gmail-update').val());
		alert("user details updated")
	},
	cancel: function() {
		blogsView.render();

	},
	delete: function() {
		this.model.destroy();
		alert("user details deleted")
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

// Backbone View for all blogs

var BlogsView = Backbone.View.extend({
	model: blogs,
	el: $('.blogs-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(blog) {
			self.$el.append((new BlogView({model: blog})).render().$el);
		});
		return this;
	}
});

var blogsView = new BlogsView();

$(document).ready(function() {
	$('.add-blog').on('click', function() {
		var blog = new Blog({
			pancard: $('.pancard-input').val(),
			phone: $('.phone-input').val(),
			gmail: $('.gmail-input').val()
		});
		$('.pancard-input').val('');
		$('.phone-input').val('');
		$('.gmail-input').val('');
		console.log(blog.toJSON());
		blogs.add(blog);
		alert("user details updated")
	})
})
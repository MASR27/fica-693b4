---
title: Subscribe for Updates
layout: advanced
---

<p>
Want to be informed when I post new articles? If you've got an RSS reader you can 
subscribe to my <a href="/feed.xml">feed</a>. If you would rather get an email, simply enter your
email address below. You will get an email once a day when new posts have been released. 
I may also send additional notes from time to time as well. And of course, you can 
unsubscribe any time. 
</p>

<div id="app">
<input v-model="email" type="email"> 
<button @click="doSubscribe" :disabled="working">Subscribe</button>
<p style="font-weight: bold">
{% raw %}
{{ status }}
{% endraw %}
</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
const SUBSCRIBE_API = '/.netlify/functions/newsletter-signup?email=';

const app = new Vue({
	el:'#app',
	data: {
		email:'',
    	working:false,
		status:''
	},
	methods: {
		async doSubscribe() {
			if(this.email === '') return;
			this.working = true;
			console.log('do add for'+this.email);
			this.status = 'Attemping to subscribe you...';
			
			fetch(SUBSCRIBE_API + this.email)
			.then(res => {
				return res.json()
			})
			.then(res => {
				console.log('status',res.status);
				if(res.status === 'subscribed') {
					this.status = 'You have been subscribed!';
				} else if(res.status === 400) {
					this.status = `There was an error: ${res.detail}`;
				}
				this.working = false;
			})
			.catch(e => {
				console.log('error result', e);
			});
		}
	}
})
</script>


<form action="https://getform.io/f/4f5908b4-11ba-4fe1-96e1-2bc10a9864ee" method="POST">
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="text" name="message">
    <!-- checkbox handle --> 
    <input type="checkbox" name="subscribe" value="yes" checked>
    <input type="hidden" name="subscribe" value="no">
    <!-- radio button handle --> 
    <input type="radio" name="gender" value="male" checked>
    <input type="radio" name="gender" value="female">
    <input type="radio" name="gender" value="other">
    <!-- select field handle --> 
    <select name="work-experience">
        <option value="one-year">0-1 years</option>
        <option value="one-five-years">1-5 years</option>
        <option value="five-plus-years">5+ years</option>
    </select>
    <button type="submit">Send</button>
</form>
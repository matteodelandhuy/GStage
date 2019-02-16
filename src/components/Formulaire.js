



Vue.component('form-input', {
  props: ['question'],
  template: '<div class="form-group" :class="{\'input\': true, \'has-error\': errors.has(question.label) }">' +
    '<input type="text" v-validate="question.validate" :id="question.id" :name="question.label"'+
           'class="form-control" v-model="question.answer":placeholder="question.placeholder"/>' +
    '    <span v-show="errors.has(question.label)" class="help-block">{{ errors.first(question.label) }}</span>' +
    '</div>'
});

Vue.component('form-select', {
    props: ['question'],
    created: function () {
        this.$options.template = '<div class="form-group" :class="{\'input\': true, \'has-error\': errors.has(question.label) }">' +
        '<select v-validate="question.validate" :id="question.id" :name="question.label" v-model="question.answer" class="form-control" >' +
        '<option v-for="option in question.options" >{{option}}</option>' +
        '</select>' +
        '<span v-show="errors.has(question.label)" class="help-block">{{ errors.first(question.label) }}</span>' +
        '</div>'
    }
});

Vue.component('form-radio', {
  props: ['question'],
  created: function() {
    this.$options.template = '<div class="col-sm-9"> ' +
      '<label  v-for="option in question.options" :for="option" class="radio-inline" >' +
      '<input :id="option" :name="question.label" type="radio" v-model="question.answer"' +
      '       :value="option"/> {{option}}' +
      '</label>' +
      '</div>';
  }
});

Vue.component('form-textarea', {
  props: ['question'],
  template: '<textarea v-validate="question.validate" class="form-control" placeholder="" v-model="question.answer"  :placeholder="question.placeholder"/>'
});

Vue.component('form-question', {
  props: ['question'],
  created: function() {
    this.$options.template = '<div class="form-group"> ' +
      '<label for="" class="col-sm-3 col-lg-2 control-label">' +
      '{{question.label}}';
    if ((this.question.validate !== undefined) && this.question.validate.match("required")) {
      this.$options.template += '<em>*</em>'
    }
    this.$options.template += '</label>' +
      '<div class="col-sm-9 col-lg-10">';
    switch (this.question.type) {
      case 'input':
        this.$options.template += '<form-input :question="question"></form-input>';
        break;
      case 'select':
        this.$options.template += '<form-select :question="question"></form-select>';
        break;
      case 'radio':
        this.$options.template += '<form-radio :question="question"></form-radio>';
        break;
      case 'textarea':
        this.$options.template += '<form-textarea :question="question"></form-textarea>';
        break;
      default:
        this.$options.template += 'Unsupported question type: ' + this.question.type;
    }
    this.$options.template += '</div></div>';
  }
});

Vue.use(VeeValidate);





console.log("Je passe dans Formulaire.vue");

// bootstrap the applications
var app = new Vue({
  el: '#dynform',
  data: {
    questions: []
  },
  created: function() {
    // Dynamic Form could be load from a REST API
    this.questions.push({
	
	// Etudiant
      id:"NomEtudiant",
      label: 'Nom',
      type: 'input',
      validate: "required|alpha"
     }, {
      id: "PrenomEtudiant",
      label: 'Prénom',
      type: 'input',
      validate: "required|alpha"
     }, {
      id: "GenreEtudiant",
      label: 'Genre',
      type: 'radio',
      options: ['Male', 'Female'],
      answer: 'Male'
     }, {
      id: "DateDeNaissanceEtudiant",
      label: 'Date de naissance',
      type: 'input',
      validate: "required"
     }, {
      id: "AdresseEtudiant",
      label: 'Adresse',
      type: 'input',
      validate: "required"
     },  {
      id: "CodePostalEtudiant",
      label: 'Code postal',
     type: 'input',
      validate: "required"
     }, {
      id: "VilleEtudiant",
      label: 'Ville',
      type: 'input',
      validate: "required"
     }, {
	 
	
    
	
      id: "NumeroTelephoneEtudiant",
      label: 'Numéro de téléphone',
      type: 'input',
      validate: "required"
     }, {
      id: "MailEtudiant",
      label: 'Adresse mail',
      type: 'input',
      validate: "required"
     }, {
	
	//Entreprise
      id: "NomEntreprise",
      label: "Nom de l'entreprise",
      type: 'input',
      validate: "required"
    }, {
      id: "AdresseEtudiante",
      label: "adresse",
     type: 'textarea',
      validate: "required"
    }, {
      id: "CodePostalEntreprise",
      label: 'Code postal',
      type: 'input',
      validate: "required"
    }, {
      id: "VilleEntreprise",
      label: 'Ville',
       type: 'input',
      validate: "required"
    }, {
      id: "PaysEntreprise",
      label: 'Pays',
      type: 'input',
      validate: "required"
    }, {
      id:"NumeroTelephoneEntreprise",
      label: 'Numéro de téléphone',
       type: 'input',
      validate: "required"
    }, {
      id:"NumeroFaxEntreprise",
      label: 'Numéro de fax',
      type: 'input',
      validate: "required"
    }, {
     
      id:"MailEntreprise",
      label: 'Adresse Mail',
      type: 'input',
      validate: "required"
    }, {
    
	// Signataire de la convention
      id: "GenreDirecteur",
      label: 'Civilité',
      type: 'radio',
      options: ['Male', 'Female'],
      answer: 'Male'
     }, {
      id: "PrenomDirecteur",
      label: 'Prénom',
       type: 'input',
      validate: "required"
     }, {
      id: "NomDirecteur",
      label: 'Nom',
       type: 'input',
      validate: "required"
    }, {
     
      id: "QualiteDirecteur",
      label: 'Qualité',
      type: 'input',
      validate: "required"
    }, {
	
	// Date et modalites du stage
	
	
      id: "DebutStage",
      label: 'Début du stage',
       type: 'input',
      validate: "required"
     }, {
      id: "FinStage",
      label: 'Fin du stage',
       type: 'input',
      validate: "required"
     }, 
	 
	 {
      id: "DureeStage",
      label: 'Durée hebdomadaire',
     type: 'input',
      validate: "required"
     }, {
      id: "TravailNuit",
      label: 'Travail de nuit',
      type: 'radio',
      options: ['Oui', 'Non'],
      answer: 'Non'
     }, {
      id: "MontantGratification",
      label: 'Montant de la gratification',
       type: 'input',
      validate: "required"
     }, {
      id: "ModeVersement",
      label: 'Mode versement',
       type: 'input',
      validate: "required"
     }, {
      id: "Avantages",
      label: 'Avantages',
       type: 'input',
      validate: "required"
     }, {
      id: "Congés",
      label: 'Congés',
       type: 'input',
     
     },
	
	
  // tuteur
  {
      id: "NomTuteur",
      label: 'Nom',
      type: 'input',
      validate: "required"
     }, {
      id: "PrenomTuteur",
      label: 'Prénom',
       type: 'input',
      validate: "required"
     }, {
      id: "FonctionTuteur",
      type: 'input',
      validate: "required"
     }, {
      id: "TelephoneTuteur",
      label: 'Téléphone',
      type: 'input',
      validate: "required"
     }, {
      id: "MailTuteur",
      label: 'Adresse mail',
      type: 'input',
      validate: "required"
     },
	 
	 {
      id: "NumeroFaxTuteur",
      label: 'Numéro de fax',
      type: 'input',
      validate: "required"
     },
     
	 
	  // Contenu du stage
	  
	  {
	  id: "SujetStage",
      label: 'Sujet du stage',
      type: 'input',
      validate: "required",
     }, 
     {
      id: "ActivitesDemandees",
      label: 'Activités demandées',
      type: 'input',
      validate: "required"
    },  
    {
	 
      id: "EmailSelf",
      label: 'Votre Email etumai pour recevoir les informations de suivi',
     type: 'input',
      validate: "required"
    
  });
  },
  
  methods: {

    displayForm: function(event) {
      var $this = this;
      var $validator = this.$validator;
      var data = {};
      this.questions.forEach(function(question) {
        if (question.validate !== undefined) {
          $validator.attach(question.label, question.validate);
          data[question.label] = question.answer;
        }
      });


      var $questions = this.questions;
      $validator.validateAll(data).then(function() {
        var form = [];
        $questions.forEach(function(question) {
          form.push({
            id: question.id,
            label: question.label,
            answer: question.answer
          });
        });
        alert("Valid form: "+JSON.stringify(form));
      }).catch(function(error) {
          $this.$children.forEach(function(child) {
        	child.$children.forEach(function(child) {
          	child.$validator.validateAll();
          });
        });
        alert("Invalid form. Error count:  " + $validator.getErrors().count());
      })
    }
  }

  
});







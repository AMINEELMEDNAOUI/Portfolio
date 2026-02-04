class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const text = message.toLowerCase();

        // 1. POLITESSE & HUMEUR
        if (this.contains(text, ["hi", "hello", "bonjour", "salut", "hey"])) {
            return this.actionProvider.handleResponse("greeting");
        }
        if (this.contains(text, ["cv", "ca va", "ça va", "comment vas", "how are you"])) {
            return this.actionProvider.handleResponse("status");
        }
        if (this.contains(text, ["merci", "thanks", "thank you", "cool", "super"])) {
            return this.actionProvider.handleResponse("thanks");
        }

        // 2. IDENTITÉ & LOCALISATION
        if (this.contains(text, ["qui es-tu", "who are you", "c'est qui", "présente", "presentation"])) {
            return this.actionProvider.handleResponse("presentation");
        }
        if (this.contains(text, ["habite", "live", "ville", "city", "casa", "maroc", "morocco"])) {
            return this.actionProvider.handleResponse("location");
        }
        if (this.contains(text, ["age", "âge", "old"])) {
            return this.actionProvider.handleResponse("age");
        }

        // 3. TECHNIQUE & PROJETS
        if (this.contains(text, ["projet", "réalisations", "portfolio", "project", "work"])) {
            return this.actionProvider.handleResponse("projects");
        }
        if (this.contains(text, ["skill", "compétence", "techno", "stack", "langage", "code"])) {
            return this.actionProvider.handleResponse("competences");
        }
        if (this.contains(text, ["big data", "hadoop", "spark", "kafka", "data"])) {
            return this.actionProvider.handleResponse("bigdata_specific");
        }
        if (this.contains(text, ["ia", "ai", "machine learning", "deep learning", "intelligence"])) {
            return this.actionProvider.handleResponse("ai_specific");
        }

        // 4. PARCOURS & CONTACT
        if (this.contains(text, ["etude", "formation", "study", "diplome", "ensam", "master"])) {
            return this.actionProvider.handleResponse("formation");
        }
        if (this.contains(text, ["exp", "stage", "internship", "dsi", "bg partner"])) {
            return this.actionProvider.handleResponse("experience");
        }
        if (this.contains(text, ["github", "linkedin", "insta", "social", "cv pdf"])) {
            return this.actionProvider.handleResponse("socials");
        }
        if (this.contains(text, ["contact", "email", "mail", "écrire", "write"])) {
            return this.actionProvider.handleResponse("contact");
        }

        // 5. PERSONNALITÉ (Soft Skills)
        if (this.contains(text, ["pourquoi toi", "qualité", "soft skills", "personnalité", "hobby", "loisir"])) {
            return this.actionProvider.handleResponse("personality");
        }
        if (this.contains(text, ["bac", "biologie", "physique", "mention"])) return this.actionProvider.handleResponse("bac");
        if (this.contains(text, ["bpm", "bonitasoft", "wavesoft", "achat"])) return this.actionProvider.handleResponse("project_bpm");
        if (this.contains(text, ["pointage", "présence", "attendance"])) return this.actionProvider.handleResponse("project_pointage");
        if (this.contains(text, ["faculté", "ben msik", "fsbm"])) return this.actionProvider.handleResponse("formation");

        // Disponibilité & Alternance
        if (this.contains(text, ["dispo", "quand", "disponible", "cherche", "embauche", "recrute", "alternance"]))
            return this.actionProvider.handleResponse("availability");

        // Langues
        if (this.contains(text, ["langue", "parle", "anglais", "français", "english", "french", "arabic"]))
            return this.actionProvider.handleResponse("languages");

        // Qualités & Soft Skills
        if (this.contains(text, ["qualité", "atout", "point fort", "humain", "soft skill", "personnalité"]))
            return this.actionProvider.handleResponse("soft_skills");

        // Loisirs
        if (this.contains(text, ["loisir", "hobby", "hobbies", "sport", "fais quoi", "passion"]))
            return this.actionProvider.handleResponse("hobbies");

        // Détails sur sa mission actuelle
        if (this.contains(text, ["mission", "rôle", "tâche", "fait quoi chez dsi"]))
            return this.actionProvider.handleResponse("dsi_mission");

        // Méthode Agile
        if (this.contains(text, ["agile", "scrum", "méthode", "organisation"]))
            return this.actionProvider.handleResponse("scrum_detail");
        // Remerciements
        if (this.contains(text, ["merci", "thanks", "thank you", "thx", "remercie", "parfait", "super"])) {
            return this.actionProvider.handleResponse("thanks");
        }
        // Salaire et Mobilité
        if (this.contains(text, ["salaire", "argent", "salary", "paye", "combien"])) return this.actionProvider.handleResponse("salary");
        if (this.contains(text, ["déplace", "bouger", "déménage", "relocation", "france", "canada", "étranger"])) return this.actionProvider.handleResponse("relocation");

        // Qualités et Défauts
        if (this.contains(text, ["défaut", "faiblesse", "weakness", "mauvais"])) return this.actionProvider.handleResponse("weakness");
        if (this.contains(text, ["qualité", "atout", "soft skill", "personnalité", "strength"])) return this.actionProvider.handleResponse("soft_skills");

        // Futur et Vision
        if (this.contains(text, ["futur", "avenir", "5 ans", "ambition", "carrière", "vision"])) return this.actionProvider.handleResponse("vision");
        if (this.contains(text, ["pourquoi toi", "pourquoi lui", "recruter", "embaucher", "why him"])) return this.actionProvider.handleResponse("why_him");

        // Mode de travail
        if (this.contains(text, ["télétravail", "remote", "distance", "maison"])) return this.actionProvider.handleResponse("remote");
        if (this.contains(text, ["équipe", "seul", "team", "collaboration"])) return this.actionProvider.handleResponse("team_work");
        if (this.contains(text, ["dispo", "quand", "available", "immédiat"])) return this.actionProvider.handleResponse("availability");

        // Divers
        if (this.contains(text, ["langue", "parle", "anglais", "english", "french"])) return this.actionProvider.handleResponse("languages");
        if (this.contains(text, ["hobby", "loisir", "passion", "sport"])) return this.actionProvider.handleResponse("hobbies");
        if (this.contains(text, ["ia", "ai", "intelligence artificielle", "chatgpt"])) return this.actionProvider.handleResponse("ai_opinion");
        // Où travaille-t-il ?
        if (this.contains(text, ["où travaille", "travaile amine", "where does amine work", "employeur", "entreprise actuelle", "current company", "work place", "works", "work", "travaille", "travail"])) {
            return this.actionProvider.handleResponse("work_place");
        }
        // PAR DÉFAUT
        this.actionProvider.handleResponse("fallback");
    }

    // Petite fonction utilitaire pour simplifier la lecture
    contains(text, keywords) {
        return keywords.some(key => text.includes(key));
    }
}
export default MessageParser;
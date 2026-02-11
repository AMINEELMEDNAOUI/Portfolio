class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const text = this.normalize(message);
        const words = text.split(/\s+/);


        const categories = [
            { id: "help", keywords: ["help", "aide", "aid", "can you help", "tu peux m aider", "peux tu m aider", "aide moi", "assist me", "support", "que peux tu faire", "what can you do", "what do you do", "what are you able to do", "how can you help", "comment tu peux m aider"] },
            { id: "status", keywords: ["how are you", "how r u", "how are u", "how ru", "hru", "how you doing", "how are you doing", "how do you do", "how is it going", "how its going", "how's it going", "how are things", "how are you today", "are you ok", "you ok", "u ok", "are u ok", "are you fine", "you good", "u good", "what s up", "whats up", "wassup", "sup", "wsup", "cv", "ca va", "ça va", "sa va", "sava", "cava", "comment ca va", "comment ça va", "comment tu vas", "comment vas tu", "comment vas", "tu vas bien", "ça roule", "ca roule", "tu vas comment", "tout va bien", "bien ou quoi", "tranquille", "ça dit quoi", "ca dit quoi", "labas", "labass", "labes", "kidayr", "kidayra", "kidayr a khouya", "kidayr a sadiqi", "kif dayr", "kifach dayr", "chno l7al", "ach khbar", "ash khbar", "kifach", "kif halek", "kif halk"] },
            { id: "greeting", keywords: ["hi", "hii", "hiii", "hey", "heyy", "heyyy", "yo", "yoo", "yooo", "hello", "helloo", "hellooo", "hola", "bonjour", "bonsoir", "salut", "slt", "cc", "coucou", "coucouu", "salam", "salam aleykoum", "salam alaykoum", "salam alikoum", "slm", "aslam", "assalam", "assalamou alaykoum", "ahlan", "ahlan wa sahlan", "marhaba", "mrhba", "labas 3lik", "wakha", "wesh", "wsh", "wech", "saha", "sba7 lkhir", "sbah lkhir", "msa lkhir", "masa lkhir"] },
            { id: "presentation", keywords: ["who are you", "who r u", "who are u", "who ru", "what are you", "what r u", "what is this", "what is your name", "what s your name", "whats your name", "your name", "name", "qui es tu", "qui es-tu", "tu es qui", "t es qui", "c est qui", "c est quoi", "c est quoi ton nom", "ton nom", "tu t appelles comment", "presente toi", "présente toi", "presentation", "présentation", "c est quoi ton role", "ton role", "tu fais quoi", "que fais tu", "que peux tu faire", "tu sers a quoi", "chkon nta", "chkon nti", "chkoun nta", "chkoun nti", "chno smitek", "chno smiytek", "smitek", "smiytek", "ach katdir", "ach katdir hna"] },
            { id: "bot_identity", keywords: ["are you a robot", "are you robot", "are you human", "are you ai", "are you chatgpt", "are you an ai", "are you real", "bot", "robot", "ai", "artificial intelligence", "tu es un robot", "tu es robot", "tu es humain", "tu es une ia", "tu es chatgpt", "tu es un bot", "t es un bot", "t es une ia", "tu es une machine", "machine", "intelligence artificielle", "wach nta robot", "wach nta bot", "wach nta insan", "nta ia", "nti ia"] },
            { id: "languages", keywords: ["languages", "language", "what languages", "which languages", "do you speak", "can you speak", "speak english", "do you speak french", "do you speak arabic", "speak french", "speak arabic", "speak english", "tu parle", "tu parles", "tu parle francais", "tu parles francais", "tu parle français", "tu parles français", "tu parle anglais", "tu parles anglais", "tu parle arabe", "tu parles arabe", "parle francais", "parle français", "parle anglais", "parle arabe", "langue", "langues", "english", "french", "arabic", "anglais", "francais", "français", "arabe", "wach kat3ref t hdar francais", "wach kat3ref t hdar anglais", "wach kat3ref t hdar arabe", "kat3ref t hdar"] },
            { id: "location", keywords: ["where do you live", "where does he live", "where is he from", "where are you from", "where are you located", "city", "country", "location", "address", "ou habite", "ou est", "tu habite ou", "ou vit", "ville", "pays", "localisation", "casablanca", "casa", "maroc", "morocco", "rabat", "tanger", "fin sakn", "fin kay3ich", "mnin nta", "mnin howa", "fin kayn", "fin sakn amine"] },
            { id: "age", keywords: ["age", "his age", "her age", "your age", "how old", "how old are you", "how old is he", "how old is amine", "what is his age", "what s his age", "what is your age", "age of amine", "âge", "tu as quel age", "tu as quel âge", "quel age", "quel âge", "il a quel age", "amine a quel age", "amine age", "ch7al 3mrk", "ch7al 3mro", "ch7al 3mr amine", "3mrk", "3mro", "3omr"] },
            { id: "formation", keywords: ["education", "study", "studies", "degree", "university", "school", "master", "bachelor", "diploma", "graduation", "etude", "étude", "etudes", "études", "formation", "diplome", "diplôme", "universite", "université", "ecole", "école", "ensam", "fsbm", "ben msik", "licence", "master", "fin qra", "chno qra", "ach qra", "education dyalo", "diplome dyalo", "wach 3ndo master"] },
            { id: "bac", keywords: ["bac", "baccalaureat", "baccalauréat", "high school diploma", "high school", "mention", "biof", "physical sciences", "science physique", "science physiques", "wach jab bac", "chno jab f bac", "mention f bac"] },
            { id: "experience", keywords: ["experience", "work experience", "job", "jobs", "career", "internship", "intern", "training", "company", "companies", "exp", "stage", "travail", "travaille", "travaille t", "emploi", "poste", "carriere", "carrière", "dsi", "dsi conseils", "bg partner", "bg partners", "wach khdam", "fin khdam", "khdma", "khdam"] },
            { id: "work_place", keywords: ["where does amine work", "where does he work", "current job", "current company", "current employer", "work place", "where is he working", "where is he working now", "ou travaille", "ou il travaille", "amine travaille ou", "entreprise actuelle", "employeur", "travaille chez", "fin khdam daba", "fin kaykhdam daba", "chno charika dyalo"] },
            { id: "dsi_mission", keywords: ["mission", "role", "task", "tasks", "what does he do", "what is his role", "what is he doing", "responsibilities", "rôle", "tache", "tâche", "fait quoi", "fait quoi chez dsi", "que fais il chez dsi", "dsi mission", "ach kaydir f dsi", "chno kaydir f dsi"] },
            { id: "projects", keywords: ["projects", "project", "portfolio", "work", "apps", "applications", "personal projects", "side projects", "projet", "projets", "portfolio", "realisations", "réalisations", "travaux", "application", "applications", "ach dar", "chno dar", "projects dyalo"] },
            { id: "project_bpm", keywords: ["bpm", "bonita", "bonitasoft", "wavesoft", "wave soft", "erp", "purchase", "purchasing", "achat", "workflow", "processus achat", "process", "automation", "processus", "bonita bpm", "erp wavesoft"] },
            { id: "project_pointage", keywords: ["attendance", "check in", "check-in", "presence", "clock in", "time tracking", "tracking", "employee attendance", "pointage", "présence", "presence", "gestion presence", "gestion des presences", "gestion des présences", "pointage app", "systeme pointage"] },
            { id: "competences", keywords: ["skills", "skill", "tech stack", "stack", "technologies", "tools", "programming languages", "frameworks", "competence", "compétence", "competences", "compétences", "techno", "langage", "code", "framework", "backend", "frontend", "react", "angular", "nestjs", "spring boot", "node", "nodejs", "java", "python", "sql", "docker", "aws"] },
            { id: "bigdata_specific", keywords: ["big data", "data", "data engineer", "data engineering", "etl", "pipeline", "hadoop", "spark", "kafka", "mapreduce", "nosql", "ingenieur data", "data engineer", "bigdata"] },
            { id: "ai_opinion", keywords: ["ai", "ia", "artificial intelligence", "intelligence artificielle", "machine learning", "deep learning", "ml", "dl", "tensorflow", "pytorch", "scikit learn", "scikit-learn", "chatgpt", "openai"] },
            { id: "certifications", keywords: ["certification", "certifications", "certificate", "certificates", "aws", "scrum", "psm", "sfpc", "certif", "certifs", "certification scrum", "certification aws"] },
            { id: "soft_skills", keywords: ["soft skills", "softskill", "strength", "strengths", "qualities", "quality", "teamwork", "leadership", "qualite", "qualité", "atout", "point fort", "personnalite", "personnalité"] },
            { id: "weakness", keywords: ["weakness", "weaknesses", "bad point", "negative", "defaut", "défaut", "faiblesse", "point faible"] },
            { id: "hobbies", keywords: ["hobby", "hobbies", "free time", "what do you do for fun", "sport", "sports", "passion", "loisir", "loisirs", "passion", "sport", "tu fais quoi"] },
            { id: "availability", keywords: ["availability", "available", "when can you start", "when are you available", "start date", "dispo", "disponible", "quand", "immédiat", "immediat", "recrute", "embauche", "cherche", "alternance", "cdi", "stage pre embauche", "stage pre-embauche"] },
            { id: "salary", keywords: ["salary", "salaire", "pay", "money", "how much", "compensation", "remuneration", "rémunération", "expected salary", "desired salary"] },
            { id: "relocation", keywords: ["relocation", "move", "moving", "abroad", "international", "france", "canada", "europe", "mobilite", "mobilité", "demmenage", "déménage", "etranger", "étranger", "bouger"] },
            { id: "remote", keywords: ["remote", "work from home", "telework", "teleworking", "teletravail", "télétravail", "distance", "hybrid", "hybride"] },
            { id: "team_work", keywords: ["team work", "teamwork", "team", "collaboration", "work in team", "working with team", "equipe", "équipe", "travail en equipe", "travail en équipe"] },
            { id: "vision", keywords: ["future", "vision", "goal", "goals", "ambition", "in 5 years", "five years", "career plan", "futur", "avenir", "ambition", "objectif", "vision", "5 ans"] },
            { id: "why_him", keywords: ["why him", "why should we hire", "why hire him", "why you", "why should i hire you", "why should we recruit you", "pourquoi toi", "pourquoi lui", "pourquoi recruter", "pourquoi embaucher", "pourquoi choisir"] },
            { id: "contact", keywords: ["contact", "email", "mail", "e mail", "phone", "telephone", "téléphone", "number", "numero", "numéro", "how can i contact", "how to contact", "reach him", "comment le contacter", "comment contacter amine", "write", "message"] },
            { id: "socials", keywords: ["linkedin", "github", "instagram", "insta", "social", "social media", "profile", "links", "reseaux", "réseaux", "profil linkedin"] },
            { id: "cv_download", keywords: ["cv", "resume", "curriculum", "cv pdf", "download cv", "get cv", "send cv", "telecharger cv", "télécharger cv"] },
            { id: "thanks", keywords: ["merci", "thanks", "thank you", "thx", "ty", "parfait", "super", "cool", "top", "nice", "great"] }
        ];

        let bestMatch = { id: "fallback", score: 0 };

        categories.forEach(category => {
            let currentScore = 0;

            category.keywords.forEach(key => {
                const normalizedKey = this.normalize(key);


                if (text === normalizedKey) {
                    currentScore += 50;
                }

                else if (text.includes(normalizedKey)) {
                    currentScore += 25;
                }

                const keyWords = normalizedKey.split(/\s+/);
                keyWords.forEach(word => {
                    if (words.includes(word)) {
                        currentScore += 2;
                    }
                });
            });

            if (currentScore > bestMatch.score) {
                bestMatch = { id: category.id, score: currentScore };
            }
        });


        if (bestMatch.score < 5) {
            return this.actionProvider.handleResponse("fallback");
        }

        return this.actionProvider.handleResponse(bestMatch.id);
    }
    normalize(text) {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }
}

export default MessageParser;
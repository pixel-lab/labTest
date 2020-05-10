import uuidv4 from 'uuid/v4'; 


const Mutation = {
    addComment(parent, args, { db }, info) {
        const checkExisting = db.Users.some(i => i.id === args.data.post) && db.blogData.some(i => i.id === args.data.post);
        if (checkExisting) {
            let usr = {
                id: uuidv4(),
                ...args.data
            };
            db.postcomments.push(usr);
            return usr;
        }
        else {
            throw new Error('Not a valid comment, please check the userid or post id');
        }
    },
    addUserToList(parent, args, { db }, info) {
        const checkExisting = db.Users.some(i => i.email === args.data.email);
        if (!checkExisting) {
            let usr = {
                id: uuidv4(),
                ...args.data
            };
            db.Users.push(usr);
            return [usr];
        }
        else {
            throw new Error('Email id is already exits');
        }

    },
    deleteUserFromList(parent, args, { db }, info) {
        const getIndex = db.Users.findIndex(i => i.id === args.id);
        if (getIndex === -1) {
            throw Error('invalid User');
        }
        const newUser = db.Users.splice(getIndex, 1);
        db.blogData = db.blogData.filter(i => {
            if (i.user === args.id) {
                db.postcomments = db.postcomments.filter(j => j.post !== i.user)
            }
            return i.user !== args.id
        });
        db.postcomments = db.postcomments.filter(j => j.post !== args.id);
        return newUser;

    },
    updateUserFromList(parent, args, { db }, info){
        const  {id, name, email, age}  = args.data;

        const user = db.Users.find(i => i.id === id);
        if(!user){
            throw new Error('Invalid user');
        }
        
        if(typeof email !== 'undefined'){
            const checkEmail = db.Users.some(i => i.email === email);
            if(checkEmail){
                throw new Error('Email id already exits');
            }
            user.email = email;
        }
        
        if(typeof name !== 'undefined'){
            user.name = name;
        }

        if(typeof age !== 'undefined'){
            user.age = age;
        }
        return user;

    },
    addPost(parent, args, { db }, info) {
        const checkExisting = db.Users.some(i => i.id === args.data.author);
        if (checkExisting) {
            const post = {
                id: uuidv4(),
                ...args.data
            }
            db.blogData.push(post);
            return post;
        }
        else {
            throw new Error('not a valid author');
        }
    }
}

export {Mutation as default}
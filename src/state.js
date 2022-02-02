
let store={
    _state: {
        related_tags:[
            'data science', 'big data', 'math', 'web development', 'machine learning', 'artificial intelligence', 'physics', 'data structure', 'algorithms', 'programming', 'self-development', 'java', 'c++', 'c#', 'python', 'javascript', 'expressjs', 'devops', 'cisco'
        ],
        deadlines: [
            {
                id:1,
                related_tag:'math',
                predmet: 'Oly matematika',
                title: '#4 Integrallarni hisoblash asoslari',
                date: '2013-03-31T14:32:22Z'  // UTC format
            },
            {
                id:2,                
                related_tag:'physics',
                predmet: 'Fizika',
                title: '#2 Kvant fizikasi',
                date: '2013-03-31T14:32:22Z'  // UTC format
            },
            {
                id:3,                
                related_tag:'physics',
                predmet: 'Fizika',
                title: '#2 Kvant fizikasi',
                date: '2013-03-31T14:32:22Z'  // UTC format
            },
            {
                id:4,                
                related_tag:'physics',
                predmet: 'Fizika',
                title: '#2 Kvant fizikasi',
                date: '2013-03-31T14:32:22Z'  // UTC format
            },
            {
                id:5,                
                related_tag:'physics',
                predmet: 'Fizika',
                title: '#2 Kvant fizikasi',
                date: '2013-03-31T14:32:22Z'  // UTC format
            }
        ],
        activities: [
            {
                id: 1,
                related_tags:[
                    'math', 'data science'
                ],
                title: '#1 news or activity',
                body: '#1 news\'s content here some lorem ipsum',
                send_by: 'John Doe',
                like: 1,
                unlike: 2,
                date: '2013-03-31T14:32:22Z',  //UTC format
                img: 'https://render.fineartamerica.com/images/images-profile-flow/350/images-medium-5/3-white-matter-fibres-and-brain-artwork-science-photo-library.jpg'
            },
            {
                id: 2,
                related_tags:[
                    'physics', 'data structure'
                ],
                title: '#2 news or activity',
                body: '#2 news\'s content here some lorem ipsum',
                send_by: 'Johnny Depp',
                like: 2,
                unlike: 3,
                date: '2013-03-31T14:32:22Z',  // UTC format
                img: 'https://render.fineartamerica.com/images/images-profile-flow/350/images-medium-5/3-white-matter-fibres-and-brain-artwork-science-photo-library.jpg'
            },
            {
                id: 3,
                related_tags:[
                    'self-development', 'big data'
                ],
                title: '#3 news or activity',
                body: '#3 news\'s content here some lorem ipsum',
                send_by: 'Jenny Do',
                like: 5,
                unlike: 1,
                date: '2013-03-31T14:32:22Z',  // UTC format
                img: 'https://render.fineartamerica.com/images/images-profile-flow/350/images-medium-5/3-white-matter-fibres-and-brain-artwork-science-photo-library.jpg'
            }
        ]
    },

    getRelatedTags(){
        return this._state.related_tags;
    },

    getDeadlines(){
        return this._state.deadlines;
    },
    getActivities(){
        return this._state.activities;
    }
}

export default store;
window.store = store;
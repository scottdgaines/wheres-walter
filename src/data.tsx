import Comments from "./components/Comments/Comments";

export const data = [
    {
        id: 1,
        noticeType: 'Lost',
        petName: 'Joey',
        images:['https://images.freeimages.com/images/large-previews/c1c/dog-1361477.jpg?fmt=webp&w=350'],
        petBreed: 'Mixed',
        petSpecie: 'Dog',
        petSex: 'Male',       
        petDescription: 'Large black and brown mixed breed, with a white patch on his front right paw',
        dateLost: '01/18/2023',
        chipNum: 1234,
        petNotes: 'Very friendly! Was last seen wearing a red collar.',
        contactNum: '123-456-7890',
        contactEmail: 'example@example.com',
        reward: true,
        comments: [
            {
                id: 1,
                username: 'leoD', 
                comment:'I think I saw him near Lincoln Blvd!',
                replies: [
                    {
                        id: 1, 
                        username: 'spongebob',
                        comment: 'Thanks!'
                    },
                    {
                        id: 2,
                        username: 'leoD',
                        comment: 'Good luck!'
                    }
                ]
            }
        ]
     },
    {
        id: 2,
        noticeType: 'Lost',
        petName: 'Kingsley',
        images: ['https://media.istockphoto.com/id/1372376277/photo/happy-smiling-puppy-dog-expression-isolated-on-green-background.jpg?s=1024x1024&w=is&k=20&c=_55xX7WO5nCm0BEvTQP4eQSZoZuAuM9Pl_U8zKSBiHI=','https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_640/MTc0NDkxODAzMDMzMDE5NzUy/220-cute-white-dog-names-with-meanings-for-your-puppy.webp', 'https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2021/04/white-dog-names-1.jpg'],
        petBreed: 'White Lab',
        petSpecie: 'Dog',
        petSex: 'Male',
        petDescription: 'Medium size (40lb) white lab with tufty ears and a pink belly',
        dateLost: '09/06/2023',
        chipNum: 1235,
        petNotes: 'Tends to be anxious so approach slowly please!',
        contactNum: `123-456-7890`,
        contactEmail: 'example@example.com',
        reward: true,
        comments: []
    },
    {
        id: 3,
        noticeType: 'Lost',
        petName: 'Skimbleshanks',
        images:['https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800'],
        petBreed: 'Tabby',
        petSpecie: 'Cat',
        petSex: 'Female',
        petDescription: 'Large red and white tabby cat with white paws and green eyes',
        dateLost: '09/08/2023',
        chipNum: 1236,
        petNotes: 'Wearing a green collar. Likes to climb trees so please look in your yards',
        contactNum: `123-456-7890`,
        contactEmail: 'example@example.com',
        reward: false,
        comments: [
            {
                id: 1,
                username: 'jack', 
                comment: 'Does the collar have any pattern on it?',
                replies: []
            },
            {
                id: 2,
                username: 'Rose D',
                comment: 'I think she might be at my neighbor\'s house',
                replies: [
                    {
                        id: 1,
                        username: 'LothLoriAnne',
                        comment: 'Can you send me their information?'
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        noticeType: 'Found',
        petName: 'Arlo',
        images:['https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg'],
        petBreed: 'Hound',
        petSpecie: 'Dog',
        petSex: 'Male',
        petDescription: 'Medium-sized coon-hound looking guy',
        dateLost: '01/18/2023',
        chipNum: 1237,
        petNotes: 'Really friendly, found near the supermarket',
        contactNum: '123-456-7890',
        contactEmail: 'example@example.com',
        reward: null,
        comments: [
            {
                id: 1,
                username: 'Danielle D',
                comment: 'just saw him back at the supermarket!',
                replies: []
            }
        ]
     },
     {
        id: 7,
        noticeType: 'Lost',
        petName: 'Kurt',
        images:['data:image/jpeg;base64,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', 'https://cdn.britannica.com/68/235668-050-A8F37B6D/Saint-bernard-dog-st-bernard-standing-short-haired.jpg'],
        petBreed: 'St Bernard',
        petSpecie: 'Dog',
        petSex: 'Male',
        petDescription: 'A Brown and white gentle giant',
        dateLost: '04/13/2023',
        chipNum: 123444,
        petNotes: 'Very friendly! Was last seen wearing a red collar.',
        contactNum: '123-456-7890',
        contactEmail: 'example@example.com',
        reward: false,
        comments: []
     },
     {
        id: 12,
        noticeType: 'Found',
        petName: 'Tum Tums',
        images:['https://www.catster.com/wp-content/uploads/2023/11/Calico-Cat-2.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETVpX-ScEmRQA6Y77k3myOBgmUJQx4FEzkDbQUPJwUSMFDYVjFWMWFwW7-HhPnaqzhzM&usqp=CAU'],
        petBreed: 'Calico',
        petSpecie: 'Cat',
        petSex: 'Female',
        petDescription: 'Orange, black, and white calico, with green eyes',
        dateLost: '03/17/2023',
        chipNum: 1234567,
        petNotes: 'Found near the corner of 10th and irving',
        contactNum: '123-456-7890',
        contactEmail: 'example@example.com',
        reward: null,
        comments: [
            {
                id: 1,
                username: 'LFB',
                comment: 'I think he belongs to my neighbor.',
                replies: [
                    {
                        id: 1,
                        username: 'Fur Elyse',
                        comment: 'On my way!'
                    }
                ]
            }
        ]
     }
]
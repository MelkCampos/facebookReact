import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rose Campos',
          avatar: 'https://i.pinimg.com/originals/5a/09/c1/5a09c1e50cc9c1259e6fe347efccc17e.gif',
        },
        date: '24 Mar 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'http://pixelartmaker.com/art/30ffc0c1426900d.png',
            },
            date: '24 Mar 2019',
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real',
          },
        ],
      },

      {
        id: 3,
        author: {
          name: 'Neil Cook',
          avatar: 'https://www.trzcacak.rs/myfile/full/506-5063885_pokeball-pokeball-pixel-art.png'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://www.poesiafaclube.com/sites/default/files/styles/perfil/public/Membros/kawaii_pixel_pastel_blue_space_buns_girl_by_anh2301-dafyzj6.png?itok=XpfeGL4d'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pinimg.com/originals/b6/dd/22/b6dd22d65297b9572042c2c6f9d18f6e.png'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://www.pnglot.com/pngfile/detail/238-2389095_rainbow-cloud-sprite-rainbow-cloud-pixel-art.png'
        },
        date: '04 Jun 2019',
        content:
          'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Lisboa',
              avatar: 'https://www.poesiafaclube.com/sites/default/files/styles/perfil/public/Membros/kawaii_pixel_pastel_blue_space_buns_girl_by_anh2301-dafyzj6.png?itok=XpfeGL4d'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construída!'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pinimg.com/originals/b6/dd/22/b6dd22d65297b9572042c2c6f9d18f6e.png'
            },
            date: '04 Jun 2019',
            content:
              'Que maaaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes'
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return(
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post}/>
        ))}
      </div>
    );
  }
}

export default PostList;


import styles from './Post.module.css'
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({ author, role, avatarUrl, publishedAt, content }) {
    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR })
    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();
        setComments([...comments, newCommentText])
        setNewCommentText(" ")
    }

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatorio')
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header className={styles.headerPost}>
                <div className={styles.author}>
                    <Avatar src={avatarUrl} alt="" />

                    <div className={styles.authorInfo}>
                        <strong>{author}</strong>
                        <span>{role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} datetime={publishedAt.toISOString()}>{publishedRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type == 'paragraph') {
                            return (<p key={line.content}>{line.content}</p>)
                        }

                        if (line.type == 'link') {
                            return (<p  key={line.content}><a href="">{line.content}</a></p>)
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    required
                    onInvalid={handleNewCommentInvalid}
                    name="comment"
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button disabled={isNewCommentEmpty} type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment key={comment} content={comment} onDeleteComment={deleteComment} />)
                })}
            </div>
        </article>
    )
}
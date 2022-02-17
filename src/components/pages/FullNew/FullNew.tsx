import React from 'react';
import {NewsContext} from "src/components/context/NewsContext";
import {
    StAuthor, StContent, StDiscribe, StFooter,
    StHeaderWrapper, StMainWrapper,
    StPageWrapper,
    StPicture,
    StPictureWrapper, StTitle,
    StTitleWrapper
} from "src/components/pages/FullNew/styled";

const FullNew: React.FC = () => {
    const { singleNew } = React.useContext(NewsContext);
    return (
        <StPageWrapper>
            <StMainWrapper>
                <StHeaderWrapper>
                    <StPictureWrapper>
                        <StPicture src={singleNew.urlToImage} alt="picture" />
                    </StPictureWrapper>
                    <StTitleWrapper>
                        <StAuthor>{singleNew.author}</StAuthor>
                        <StTitle>{singleNew.title}</StTitle>
                        <StDiscribe>{singleNew.description}</StDiscribe>
                    </StTitleWrapper>
                </StHeaderWrapper>
                <div>
                    <StContent>{singleNew.content} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
                        facere ipsa labore laborum quidem, tenetur! A alias aliquam, aliquid aut consectetur corporis
                        debitis eaque earum error esse est eveniet laudantium neque nihil non, nostrum placeat quasi
                        quibusdam ratione recusandae reprehenderit sapiente sed similique sint soluta sunt temporibus
                        tenetur totam veritatis voluptatum. Delectus deserunt eaque est in maxime minus nostrum
                        repellendus temporibus, unde? Aperiam architecto aut beatae blanditiis consequuntur, ducimus
                        est et explicabo, facere in laboriosam, minima neque praesentium quis recusandae! Ad autem cum
                        doloremque ex fugit itaque quasi quos sed voluptates voluptatibus. Architecto aspernatur atque
                        commodi consequatur dicta dolorum ducimus enim iure laudantium magnam maiores molestias numquam
                        odio quasi, quia, reiciendis tempora. Aliquid amet animi architecto aspernatur corporis
                        cupiditate deserunt dicta doloribus earum eius enim et expedita, facere fugiat laboriosam
                        neque nostrum obcaecati odit quae qui quibusdam quisquam saepe soluta ullam, vel velit
                        modi perferendis quae repellat sapiente sequi tempora voluptatibus? Ab amet ea enim eos eum id,
                        in incidunt magnam nesciunt officiis qui, quidem, repudiandae sit! Beatae dolor eligendi et
                        Aliquid commodi consequatur cumque dolor ex fugit iste libero nostrumtotam? </StContent>
                </div>
            </StMainWrapper>
            <StFooter>
                <p>{singleNew.publishedAt.replace(/[TZ]/gi, ' ')}</p>
                <p>{singleNew.source.name}</p>
            </StFooter>
        </StPageWrapper>
    );
};

export default FullNew;

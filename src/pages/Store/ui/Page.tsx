import { FC, useState, useEffect } from "react";
import { useParams } from "react-router";
import { http } from "shared/lib/http";
import { IDiscountCardProps } from "pages/Home/ui/DiscountCard";
import { Checkbox } from "shared/ui/Checkbox";
import { Container } from "shared/ui/Container";
import { Title } from "shared/ui/Title";
import styles from './Page.module.scss';
import { DiscountsList } from "pages/Home/ui/DiscountsList";
import { Button } from "shared/ui/Button";

export const Page: FC = () => {
    const {id} = useParams();
    const [discounts, setDiscounts] = useState<IDiscountCardProps[]>([]);
    
    useEffect(() => {
        http.get(`http://localhost:3005/${id}`).then((response) => setDiscounts (response as IDiscountCardProps[]))
    }, [id]);

    return (
        <Container>
            <section className={styles.section}>
                <Title>
                    <span>
                        Скидки в магазине {id}
                    </span>
                </Title>
                <div className={styles.sectionHeader}>
                    <Checkbox
                        text="Товары только со скидкой"
                    />
                </div>
                <DiscountsList items={discounts} />
                <div className={styles.sectionFooter}>
                    <Button>
                        Показать еще
                    </Button>
                </div>
            </section>
        </Container>
    )
}
// Components
import { CardRoot } from '@/components/Card/CardRoot';
import DefaultText from '@/components/DefaultText';
import SecondTitle from '@/components/SecondTitle';
import MainTitle from '@/components/MainTitle';

// Constants
import { ConstantsTitles } from '@/constants';

// Utils
import Container from '@/utils/Container';
import Icon from '@/utils/Icon';

// Data
import { ServicesData } from '@/Database/Services';

export default function Services() {
  return (
    <section id='services' className='mt-8'>
      <MainTitle title={ConstantsTitles.SERVICES_TITLE} />
      <Container>
        <div className='grid lg:grid-cols-3 gap-8 p-1 lg:p-10'>
          {ServicesData.map((card) => (
            <CardRoot.Wrapper key={card.id} isMiddleCard={card.isMiddleCard}>
              <CardRoot.Content>
                <CardRoot.Icon icon={<Icon name={card.iconName} size={55} />} />
                <SecondTitle title={card.title} />
                <DefaultText text={card.text} />
              </CardRoot.Content>
            </CardRoot.Wrapper>
          ))}
        </div>
      </Container>
    </section>
  );
}

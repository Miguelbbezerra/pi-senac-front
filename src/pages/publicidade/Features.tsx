import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import corumba from '../../images/instituicoes/corumba.jpg'
import fachadaDourados from '../../images/instituicoes/fachada-dourados.jpg'
import fachadaHubAcademy from '../../images/instituicoes/fachada-hub-academy.jpg'
import fachadaPontaPora from '../../images/instituicoes/fachada-ponta-pora.jpg'
import fachadaTresLagoas from '../../images/instituicoes/fachada-tres-lagoas.jpg'
import turismoGastronomia from '../../images/instituicoes/Senac-Turismo-e-Gastronomia.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { styled } from '@mui/material/styles';

const items = [
  {
    icon: <LocationOnIcon />,
    title: 'SENAC DOURADOS',
    description:
      'RUA DR. MÁRIO MACHADO LEMOS - JARDIM LONDRINA, Dourados - MS - (67) 34112400',
    imageLight: `url(${fachadaDourados})`,
    imageDark: `url(${fachadaDourados})`,
  },
  {
    icon: <LocationOnIcon />,
    title: 'SENAC CORUMBÁ',
    description:
      'Rua América - Centro, Corumba - MS 79302070 - (67) 32342000',
    imageLight: `url(${corumba})`,
    imageDark: `url(${corumba})`,
  },
  {
    icon: <LocationOnIcon />,
    title: 'SENAC PONTA PORÃ',
    description:
      'Rua 7 de Setembro - Centro, Ponta Pora - MS 79904652 - (67) 34314342',
    imageLight: `url(${fachadaPontaPora})`,
    imageDark: `url(${fachadaPontaPora})`,
  },
  {
    icon: <LocationOnIcon />,
    title: 'SENAC HUB ACADEMY',
    description:
      'Rua Francisco Cândido Xavier - Centro, Campo Grande - MS 79002052 - (67) 33126260',
    imageLight: `url(${fachadaHubAcademy})`,
    imageDark: `url(${fachadaHubAcademy})`,
  },
  {
    icon: <LocationOnIcon />,
    title: 'SENAC TRÊS LAGOAS',
    description:
      'Avenida Antônio Trajano dos Santos - Centro, Tres Lagoas - MS 79601002 - (67) 35095100',
    imageLight: `url(${fachadaTresLagoas})`,
    imageDark: `url(${fachadaTresLagoas})`,
  },
  {
    icon: <LocationOnIcon />,
    title: 'SENAC TURISMO E GASTRONOMIA',
    description:
      'Rua Antônio Maria Coelho - Jardim dos Estados, Campo Grande - MS 79020210 - (67) 33126260',
    imageLight: `url(${turismoGastronomia})`,
    imageDark: `url(${turismoGastronomia})`,
  },
];

interface ChipProps {
  selected?: boolean;
}

const Chip = styled(MuiChip)<ChipProps>(({ theme }) => ({
  variants: [
    {
      props: ({ selected }) => selected,
      style: {
        background:
          'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
        color: 'hsl(0, 0%, 100%)',
        borderColor: theme.palette.primary.light,
        '& .MuiChip-label': {
          color: 'hsl(0, 0%, 100%)',
        },
        ...theme.applyStyles('dark', {
          borderColor: theme.palette.primary.dark,
        }),
      },
    },
  ],
}));

interface MobileLayoutProps {
  selectedItemIndex: number;
  handleItemClick: (index: number) => void;
  selectedFeature: (typeof items)[0];
}

export function MobileLayout({
  selectedItemIndex,
  handleItemClick,
  selectedFeature,
}: MobileLayoutProps) {
  if (!items[selectedItemIndex]) {
    return null;
  }

  return (
    <Box
      sx={{
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex', gap: 2, overflow: 'auto' }}>
        {items.map(({ title }, index) => (
          <Chip
            size="medium"
            key={index}
            label={title}
            onClick={() => handleItemClick(index)}
            selected={selectedItemIndex === index}
          />
        ))}
      </Box>
      <Card variant="outlined">
        <Box
          sx={(theme) => ({
            mb: 2,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 280,
            backgroundImage: 'var(--items-imageLight)',
            ...theme.applyStyles('dark', {
              backgroundImage: 'var(--items-imageDark)',
            }),
          })}
          style={
            items[selectedItemIndex]
              ? ({
                '--items-imageLight': items[selectedItemIndex].imageLight,
                '--items-imageDark': items[selectedItemIndex].imageDark,
              } as any)
              : {}
          }
        />
        <Box sx={{ px: 2, pb: 2 }}>
          <Typography
            gutterBottom
            sx={{ color: 'text.primary', fontWeight: 'medium' }}
          >
            {selectedFeature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
            {selectedFeature.description}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ width: { sm: '100%', md: '60%' } }}>
        <Typography
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Encontre uma unidade perto de você
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
        >
          Explore nossas localizações disponíveis e encontre a unidade mais conveniente,
           oferecendo os serviços de que você precisa, perto de onde você está.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row-reverse' },
          gap: 2,
        }}
      >
        <div>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              flexDirection: 'column',
              gap: 2,
              height: '100%',
            }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={[
                  (theme) => ({
                    p: 2,
                    height: '100%',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }),
                  selectedItemIndex === index && {
                    backgroundColor: 'action.selected',
                  },
                ]}
              >
                <Box
                  sx={[
                    {
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'left',
                      gap: 1,
                      textAlign: 'left',
                      textTransform: 'none',
                      color: 'text.secondary',
                    },
                    selectedItemIndex === index && {
                      color: 'text.primary',
                    },
                  ]}
                >
                  {icon}

                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <MobileLayout
            selectedItemIndex={selectedItemIndex}
            handleItemClick={handleItemClick}
            selectedFeature={selectedFeature}
          />
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            width: { xs: '100%', md: '70%' },
            height: 'var(--items-image-height)',
          }}
        >
          <Card
            variant="outlined"
            sx={{
              backgroundColor: '#004a8c',
              backgroundImage: 'url(https://ww3.ms.senac.br/Portals/_default/Skins/SenacDna22/images/foto1carrossel.png)',
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'multiply'
            }}
          >
            <Box
              sx={(theme) => ({
                m: 'auto',
                width: '100%',
                height: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'var(--items-imageLight)',
                ...theme.applyStyles('dark', {
                  backgroundImage: 'var(--items-imageDark)',
                }),
              })}
              style={
                items[selectedItemIndex]
                  ? ({
                    '--items-imageLight': items[selectedItemIndex].imageLight,
                    '--items-imageDark': items[selectedItemIndex].imageDark,
                  } as any)
                  : {}
              }
            />
          </Card>
        </Box>
      </Box>
    </Container>
  );
}

import {Button} from '@/components/ui/button';
import {Text} from '@chakra-ui/react';
import {useState} from 'react';

type Props = {
	children: string;
};

const ExpandableText = ({children}: Props) => {
	const [expanded, setExpanded] = useState(false);
	const limit = 250;

	if (!children) return null;

	if (children.length <= limit) return children;

	const text = expanded ? children : children.substring(0, limit) + '...';

	return (
		<Text textAlign="justify">
			{text}
			<Button
				size="xs"
				ml={1}
				variant="surface"
				onClick={() => setExpanded(!expanded)}
				border={0}
			>
				{expanded ? 'Show Less' : 'Read More'}
			</Button>
		</Text>
	);
};

export default ExpandableText;

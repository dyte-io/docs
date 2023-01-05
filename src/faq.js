import yaml from 'js-yaml';
import faqString from '!!raw-loader!./faq.yaml';

const faq = yaml.load(faqString);

export default faq;

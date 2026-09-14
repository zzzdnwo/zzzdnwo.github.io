import ProjectDetail from '../components/ProjectDetail';
import projectDetails from '../data/projectDetails';

export default function Bizbooks() {
  return <ProjectDetail detail={projectDetails.bizbooks} />;
}

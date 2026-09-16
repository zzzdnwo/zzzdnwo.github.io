import ProjectDetail from '../components/ProjectDetail';
import projectDetails from '../data/projectDetails';

export default function Portfolio() {
  return <ProjectDetail detail={projectDetails.portfolio} />;
}

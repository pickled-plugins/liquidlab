(function(){

	ll.Comp.Info = class extends React.Component {

		/*
		 *
		 *
		 */
		render() {
			return (
				<div className='info'>

					<div className='info__content'>

						<div className='chat-box'>
							<h1>Here is how:</h1>
						</div>


						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>

								{ this.renderFeatureBox(ll.content.info.boxes[0]) }

							</div>

							<div className='grid__col grid__col--6-of-12'>

								<div className='info__button'>
									<div className='big-button' onClick={this.props.navigateToAboutPage}>Our story</div>
								</div>

							</div>

						</div>

						<div className='grid'>

							<div className='grid__col grid__col--6-of-12'>
								{ this.renderFeatureBox(ll.content.info.boxes[1]) }
							</div>

							<div className='grid__col grid__col--6-of-12'>
								{ this.renderFeatureBox(ll.content.info.boxes[2]) }
							</div>

						</div>

					</div>

				</div>
			);
		}


		/*
		 *
		 *
		 */
		renderFeatureBox(data, modifier) {

			var baseCls = 'feature-box feature-box--4-to-3',
				cls = modifier ? `${baseCls} feature-box--${modifier}` : baseCls;

			return (
				<div className={ baseCls }>
					<div className='feature-box__background' style={ { 'backgroundImage': `url(public/images/${data.imageFileName})` }}></div>
					<div className='feature-box__title'>
						<div>
							<h1>{ data.title }</h1>
						</div>
					</div>
					<div className='feature-box__body'>
						<div>
							<p>{ data.body }</p>
						</div>
					</div>
				</div>
			);

		}

	}

}());